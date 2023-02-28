export function Render ([first, ...res], ...values) {
    return values.reduce((acc, current) => {
        return acc.concat(current, res.shift());
    }, [first]).filter((fill) => {
        return fill !== true && fill !== false;
    }).join('');;
}

export const joinHTML = (Data, callback) => {
    return Data.map((val) => {
        return callback(val);
    }).join('');
};

export const ResponseDataHTML = (API, ElementRoot, Component) => {
    fetch(API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            ElementRoot.innerHTML = joinHTML(data, Component);
        })
}