// Dynamic Greeting
const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
  greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to my portfolio.";
}

/* Project Filtering */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll("#projects-list article");
const emptyMessage = document.getElementById("projects-empty");
const projectCount = document.getElementById("project-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    projectCards.forEach((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.dataset.category === selectedCategory;

      project.hidden = !matchesCategory;

      if (matchesCategory) {
        visibleCount++;
      }
    });

    projectCount.textContent = `${visibleCount} project(s) displayed.`;

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount > 0;
    }
  });
});

/* GitHub Repositories */
async function loadGitHubRepositories() {
  const githubUsername = "Sarahalmanjahi";
  const status = document.getElementById("github-repositories-status");
  const list = document.getElementById("github-repositories-list");
  let nextPage =
    `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`;
  const cards = document.createDocumentFragment();

  status.textContent = "Loading GitHub repositories…";

  try {
    while (nextPage) {
      const response = await fetch(nextPage);

      if (!response.ok) {
        status.textContent =
          "GitHub couldn't load the repositories. Please try again later.";
        return;
      }

      const repositories = await response.json();

      for (const repository of repositories) {
        const card = document.createElement("article");
        const heading = document.createElement("h3");
        const description = document.createElement("p");
        const link = document.createElement("a");

        heading.textContent = repository.name;
        description.textContent = repository.description || "No description provided.";
        link.href = repository.html_url;
        link.textContent = "View on GitHub";
        link.setAttribute("aria-label", `View ${repository.name} on GitHub`);
        card.append(heading, description, link);
        cards.append(card);
      }

      // GitHub provides the next page URL in the Link response header.
      const links = response.headers.get("Link") || "";
      const nextLink = links.match(/<([^>]+)>;\s*rel="next"/);
      nextPage = nextLink ? nextLink[1] : null;
    }

    const count = cards.childElementCount;
    list.append(cards);
    status.textContent = count
      ? `Loaded ${count} GitHub ${count === 1 ? "repository" : "repositories"}.`
      : "No public GitHub repositories found.";
  } catch {
    status.textContent =
      "Couldn't load GitHub repositories. Check your connection and try again.";
  }
}

loadGitHubRepositories();

/* Contact Form Validation */
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formFeedback.textContent = "Please fill in all fields.";
      formFeedback.className = "error";
    } else if (!emailPattern.test(email)) {
      formFeedback.textContent = "Please enter a valid email address.";
      formFeedback.className = "error";
    } else {
      formFeedback.textContent =
        "Form validated successfully! This demo does not send messages.";
      formFeedback.className = "success";

      contactForm.reset();
    }
  });
}
