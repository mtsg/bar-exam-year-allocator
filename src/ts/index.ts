// File to be read: index.html
import "../styles/style.scss";
import "../styles/reset.scss";
declare global {
    interface Window {
        onAllocationButtonClick: any;
    }
}

const onAllocationButtonClick = () => {
    console.log(onAllocationButtonClick.name + " called.");
    const TARGET = document.getElementById("ID_result");
    TARGET.innerHTML = getYearAllocated();
    return false;
}

const getYearAllocated = (): string => {
    console.log(getYearAllocated.name + " called.");
    const FIRST_BAR_EXAM_DATE = "2006/05/19";
    const YEAR_FROM = new Date(FIRST_BAR_EXAM_DATE).getFullYear();
    const YEAR_TO = new Date().getFullYear();
    const DIFF = YEAR_TO - YEAR_FROM;
    const AI = Math.random();
    const YEAR_ALLOCATED = YEAR_FROM + Math.round(DIFF * AI);
    console.log("YEAR_FROM: " + YEAR_FROM);
    console.log("YEAR_TO: " + YEAR_TO);
    console.log("YEAR_ALLOCATED: " + YEAR_ALLOCATED);
    return YEAR_ALLOCATED.toString();
}

window.onAllocationButtonClick = onAllocationButtonClick