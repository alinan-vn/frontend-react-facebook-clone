export function usPopulationByYearGetCall(){
    return fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(r => r.json())
    .then(data => data)
}