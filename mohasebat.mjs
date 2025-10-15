export function pasAndaz(mablaghKol, darsadSood , tedadMah) {
    const sood = darsadSood / 100;
    const soodKol = mablaghKol * sood;
    const soodOne = soodKol / 12;
    return soodOne * tedadMah;
}

export function mohasebeVam(kolMablaghVam , soodVam , tedadBazPardakht){
    const sood = soodVam / 100;
    const soodSalane = kolMablaghVam * sood;
    const soodOne = soodSalane / 12;
    const soodKolVam = soodOne * tedadBazPardakht;
    const kolBazPardakht = kolMablaghVam + soodKolVam;
    const mablaghHarBazPardakht = kolBazPardakht / tedadBazPardakht;
    return [soodKolVam, kolBazPardakht, mablaghHarBazPardakht]
}

// console.log(pasAndaz(20000, 23, 12));
// console.log(mohasebeVam(20000, 23, 6));
