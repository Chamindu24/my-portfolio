// utils/smoothScroll.ts
export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", " "); // Remove hash from URL
    }
  };
  