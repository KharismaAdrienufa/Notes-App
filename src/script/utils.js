class Utils {
    static emptyElement(element) {
        element.innerHTML = '';
    }

    static showElement(element) {
        element.style.display = 'block';
        element.hidden = false;
    }

    static hideElement(element) {
        element.style.display = 'none';
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