/* ------------------------
     AUTHENTICATION
------------------------ */

function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!email || !pass) {
    document.getElementById("error").textContent = "Email & password required.";
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location = "dashboard.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location = "login.html";
}

if (!location.href.includes("login") && localStorage.getItem("loggedIn") !== "true") {
  if (!location.href.includes("preview")) {
    window.location = "login.html";
  }
}

/* ------------------------
        UTILITIES
------------------------ */

function sanitize(str) {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function goToCreate() {
  // new post → clear edit context
  localStorage.removeItem("editType");
  localStorage.removeItem("editIndex");
  window.location = "editor.html";
}

function goBack() {
  window.history.back();
}

/* ------------------------
      LOAD DASHBOARD
------------------------ */

if (location.href.includes("dashboard")) {
  const published = JSON.parse(localStorage.getItem("published") || "[]");
  const drafts = JSON.parse(localStorage.getItem("drafts") || "[]");

  const pubList = document.getElementById("published-list");
  const draftList = document.getElementById("draft-list");

  // Published posts (title + content preview + tags)
  pubList.innerHTML = published
    .map((p, i) => {
      const preview = (p.content || "")
        .replace(/<[^>]*>/g, "")
        .slice(0, 120) + (p.content ? "..." : "");
      return `
        <div class="card">
          <h3>${p.title}</h3>
          <p class="meta">📅 ${p.timestamp}</p>
          <p class="preview">${preview}</p>
          <p class="tags"><strong>Tags:</strong> ${p.tags || "None"}</p>

          <button onclick="editPost('published', ${i})">Edit</button>
          <button onclick="deletePost('published', ${i})">Delete</button>
        </div>
      `;
    })
    .join("");

  // Drafts (title + content preview + tags)
  draftList.innerHTML = drafts
    .map((p, i) => {
      const preview = (p.content || "")
        .replace(/<[^>]*>/g, "")
        .slice(0, 120) + (p.content ? "..." : "");
      return `
        <div class="card draft">
          <h3>${p.title} <span class="badge">Draft</span></h3>
          <p class="preview">${preview}</p>
          <p class="tags"><strong>Tags:</strong> ${p.tags || "None"}</p>

          <button onclick="editPost('drafts', ${i})">Edit</button>
          <button onclick="deletePost('drafts', ${i})">Delete</button>
        </div>
      `;
    })
    .join("");
}

/* ------------------------
       EDIT / DELETE
------------------------ */

function editPost(type, index) {
  localStorage.setItem("editType", type);   // 'published' or 'drafts'
  localStorage.setItem("editIndex", String(index));
  window.location = "editor.html";
}

function deletePost(type, index) {
  let list = JSON.parse(localStorage.getItem(type) || "[]");
  list.splice(index, 1);
  localStorage.setItem(type, JSON.stringify(list));
  location.reload();
}

/* ------------------------
       LOAD EDITOR
------------------------ */

if (location.href.includes("editor")) {
  const type = localStorage.getItem("editType");
  const indexStr = localStorage.getItem("editIndex");
  const index = indexStr !== null ? parseInt(indexStr, 10) : null;

  const titleEl = document.getElementById("title");
  const contentEl = document.getElementById("richContent");
  const tagsEl = document.getElementById("tags");
  const autosaveMsg = document.getElementById("autosave-status");

  // If editing existing post (published or draft)
  if (type && index !== null && !Number.isNaN(index)) {
    const list = JSON.parse(localStorage.getItem(type) || "[]");
    const post = list[index];

    if (post) {
      titleEl.value = post.title || "";
      contentEl.innerHTML = post.content || "";
      tagsEl.value = post.tags || "";
    }
  } else {
    // Not editing → try to restore from autosave
    const autosaved = JSON.parse(localStorage.getItem("autosave") || "null");
    if (autosaved && (autosaved.title || autosaved.content || autosaved.tags)) {
      titleEl.value = autosaved.title || "";
      contentEl.innerHTML = autosaved.content || "";
      tagsEl.value = autosaved.tags || "";
      if (autosaveMsg) {
        autosaveMsg.textContent = "Restored autosaved content from " + (autosaved.timestamp || "");
      }
    }
  }

  startAutosave();
}

/* ------------------------
      VALIDATION RULES
------------------------ */

function validate(title, content, tags) {
  if (!title) return "Title is required.";
  if (!content || content === "<br>") return "Content cannot be empty.";
  if (title.length > 150) return "Title too long.";

  const invalidTag = /[^a-zA-Z0-9,\s]/;
  if (tags && invalidTag.test(tags)) return "Invalid tag format.";

  return null;
}

/* ------------------------
        SAVE DRAFT
------------------------ */

function saveDraft() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("richContent").innerHTML.trim();
  const tags = document.getElementById("tags").value.trim();

  const error = validate(title, content, tags);
  if (error) {
    document.getElementById("error").textContent = error;
    return;
  }

  const draft = { title, content, tags, timestamp: new Date().toLocaleString() };

  const type = localStorage.getItem("editType");
  const indexStr = localStorage.getItem("editIndex");
  const index = indexStr !== null ? parseInt(indexStr, 10) : null;

  let drafts = JSON.parse(localStorage.getItem("drafts") || "[]");

  if (type === "drafts" && index !== null && !Number.isNaN(index)) {
    // Updating existing draft
    drafts[index] = draft;
  } else {
    // New draft (from new post or editing published but choosing to save as draft)
    drafts.push(draft);
  }

  localStorage.setItem("drafts", JSON.stringify(drafts));

  // Clear edit context & autosave
  localStorage.removeItem("editType");
  localStorage.removeItem("editIndex");
  localStorage.removeItem("autosave");

  window.location = "dashboard.html";
}

/* ------------------------
       PREVIEW (UNPUBLISHED)
------------------------ */

function previewPost() {
  const title = sanitize(document.getElementById("title").value.trim());
  const content = sanitize(
    document.getElementById("richContent").innerHTML.trim()
  );
  const tags = document.getElementById("tags").value.trim();

  const error = validate(title, content, tags);
  if (error) {
    document.getElementById("error").textContent = error;
    return;
  }

  const imageInput = document.getElementById("imageUpload");
  let imageURL = "";

  if (imageInput && imageInput.files && imageInput.files[0]) {
    imageURL = URL.createObjectURL(imageInput.files[0]);
  }

  const previewData = {
    title,
    content,
    tags,
    timestamp: "Not published yet",
    image: imageURL,
    isPreviewOnly: true
  };

  localStorage.setItem("previewPost", JSON.stringify(previewData));
  window.location = "preview.html";
}

/* ------------------------
       PUBLISH POST
------------------------ */

function publishPost() {
  const rawTitle = document.getElementById("title").value.trim();
  const rawContent = document.getElementById("richContent").innerHTML.trim();
  const tags = document.getElementById("tags").value.trim();

  const error = validate(rawTitle, rawContent, tags);
  if (error) {
    document.getElementById("error").textContent = error;
    return;
  }

  const title = sanitize(rawTitle);
  const content = sanitize(rawContent);

  const imageInput = document.getElementById("imageUpload");
  let imageURL = "";

  if (imageInput && imageInput.files && imageInput.files[0]) {
    imageURL = URL.createObjectURL(imageInput.files[0]);
  }

  const post = {
    title,
    content,
    tags,
    timestamp: new Date().toLocaleString(),
    image: imageURL
  };

  const type = localStorage.getItem("editType");
  const indexStr = localStorage.getItem("editIndex");
  const index = indexStr !== null ? parseInt(indexStr, 10) : null;

  let published = JSON.parse(localStorage.getItem("published") || "[]");
  let drafts = JSON.parse(localStorage.getItem("drafts") || "[]");

  if (type === "published" && index !== null && !Number.isNaN(index)) {
    // Update existing published post
    published[index] = post;
  } else {
    // Create new published post
    published.push(post);
  }

  // If publishing a draft → remove from drafts
  if (type === "drafts" && index !== null && !Number.isNaN(index)) {
    drafts.splice(index, 1);
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }

  localStorage.setItem("published", JSON.stringify(published));

  // Clean up
  localStorage.removeItem("editType");
  localStorage.removeItem("editIndex");
  localStorage.removeItem("autosave");

  // NEW: Go directly to dashboard
  window.location = "dashboard.html";
}


/* ------------------------
        CANCEL POST
------------------------ */

function cancelPost() {
  // Clear edit context but do NOT delete drafts/published content
  localStorage.removeItem("editType");
  localStorage.removeItem("editIndex");
  window.location = "dashboard.html";
}

/* ------------------------
        PREVIEW PAGE
------------------------ */

if (location.href.includes("preview")) {
  const post = JSON.parse(localStorage.getItem("previewPost") || "{}");

  document.getElementById("prev-title").textContent = post.title || "";
  document.getElementById("prev-content").innerHTML = post.content || ""; // rich HTML
  document.getElementById("prev-tags").textContent = post.tags || "";
  document.getElementById("prev-time").textContent = post.timestamp || "";

  if (post.image) {
    document.getElementById("prev-image").src = post.image;
  }

  if (post.isPreviewOnly) {
    const banner = document.createElement("p");
    banner.textContent = "Preview Mode – This post is not published";
    banner.className = "preview-banner";
    document.body.prepend(banner);
  }
}

/* ------------------------
      AUTOSAVE (10s)
------------------------ */

function startAutosave() {
  setInterval(() => {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("richContent").innerHTML.trim();
    const tags = document.getElementById("tags").value.trim();

    const draft = {
      title,
      content,
      tags,
      timestamp: new Date().toLocaleTimeString()
    };

    localStorage.setItem("autosave", JSON.stringify(draft));

    const msg = document.getElementById("autosave-status");
    if (msg) {
      msg.textContent = "Autosaved at " + draft.timestamp;
    }
  }, 10000);
}

/* ------------------------
     RICH TEXT FORMATTING
------------------------ */

function format(cmd) {
  document.execCommand(cmd, false, null);
}
