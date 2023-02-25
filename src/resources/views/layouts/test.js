export function test() {
    return `
        <a href="/test">Click</a>
    `
}

const ElementBody = document.querySelector('body');
ElementBody.innerHTML = test();