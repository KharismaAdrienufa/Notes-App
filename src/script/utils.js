class Utils {
  static emptyElement(element) {
    element.innerHTML = "";
  }

  static showElement(element) {
    if (!element) return;
    element.hidden = false;
  }

  static hideElement(element) {
    if (!element) return;
    element.hidden = true;
  }

  static generateId() {
    return `notes-${crypto.randomUUID()}`;
  }

  static generateDate() {
    return new Date().toISOString();
  }
}

export default Utils;
