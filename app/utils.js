export function issueText(issue) {
    if (issue) {
        return issue.map(i => Object.getOwnPropertyNames(i).map(p => [p, i[p]].join(': '))).join('\n');
    }
    return undefined;
}

export function getLogger(tag) {
    return (message) => console.log(`${tag} - ${message}`);
}