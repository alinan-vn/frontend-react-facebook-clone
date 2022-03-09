export function generalEntriesGetCall(){
    fetch("https://api.publicapis.org/entries")
        .then(r => r.json)
        .then(data => data)
}