export function catFactsGetCall(){
    fetch("https://catfact.ninja/fact")
        .then(r => r.json())
        .then(data => data)
}
