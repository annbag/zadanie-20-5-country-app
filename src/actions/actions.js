export const GET_COUNTRIES = 'GET_COUNTRIES'; //listowanie wszytkich dostępnych państw
export const GET_COUNTRY = 'GET_COUNTRY'; // wyświetlanie informacji o jednym państwie;
export const DELETE_COUNTRY = 'DELETE_COUNTRY'; //usuwanie państwa
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'; //szukanie państwa po nazwie
export const SET_CONTINENT = 'SET_CONTINENT'; // wyświetlanie państw konktretnego kontynentu

// listowanie wszystkich dostępnych państw:
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}
// usuwanie państwa
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}
//wyświetlanie info o 1 państwie
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}
//szukanie państwa
export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}
//wyświetlanie państw danego kontynentu
export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}
