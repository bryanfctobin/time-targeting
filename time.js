const timber = {};
timber.e = false;
timber.d = new Date();
timber.f = timber.d.getHours();
timber.g = function checkTime() {
    if (this.f >= 7 && this.f <= 14) {
        console.log("School is in session");
        return this.e = true;
    }
}
console.log(timber);
timber.g();
console.log(timber);