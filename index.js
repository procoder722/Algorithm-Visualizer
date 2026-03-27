// Helper function: delay for animation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function: highlight element
function highlight(element, color = "yellow") {
    element.style.backgroundColor = color;
}

// Helper function: reset element color
function resetColor(element) {
    element.style.backgroundColor = "#87CEEB";
}

// Get elements for each algorithm
function getElements(prefix) {
    return [
        document.getElementById(`${prefix}1`),
        document.getElementById(`${prefix}2`),
        document.getElementById(`${prefix}3`),
        document.getElementById(`${prefix}4`),
        document.getElementById(`${prefix}5`)
    ];
}

// ===== BUBBLE SORT =====
async function animateBubbleSort() {
    const arr = getElements('b');
    const n = arr.length;
    
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            highlight(arr[j], "#FFD700");
            highlight(arr[j + 1], "#FF8C00");
            await sleep(400);
            
            if(parseInt(arr[j].innerHTML) > parseInt(arr[j + 1].innerHTML)) {
                let temp = arr[j].innerHTML;
                arr[j].innerHTML = arr[j + 1].innerHTML;
                arr[j + 1].innerHTML = temp;
                
                highlight(arr[j], "#90EE90");
                highlight(arr[j + 1], "#90EE90");
                await sleep(300);
            }
            
            resetColor(arr[j]);
            resetColor(arr[j + 1]);
        }
    }
    
    arr.forEach(el => highlight(el, "#00AA00"));
}

function resetBubble() {
    const arr = getElements('b');
    arr.forEach(el => resetColor(el));
}

// ===== SELECTION SORT =====
async function animateSelectionSort() {
    const arr = getElements('s');
    const n = arr.length;
    
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        highlight(arr[i], "#FFD700");
        await sleep(300);
        
        for(let j = i + 1; j < n; j++) {
            highlight(arr[j], "#FF8C00");
            await sleep(300);
            
            if(parseInt(arr[j].innerHTML) < parseInt(arr[minIndex].innerHTML)) {
                resetColor(arr[minIndex]);
                minIndex = j;
                highlight(arr[minIndex], "#FFD700");
            } else {
                resetColor(arr[j]);
            }
        }
        
        if(minIndex !== i) {
            let temp = arr[i].innerHTML;
            arr[i].innerHTML = arr[minIndex].innerHTML;
            arr[minIndex].innerHTML = temp;
            
            highlight(arr[i], "#90EE90");
            highlight(arr[minIndex], "#90EE90");
            await sleep(300);
        }
        
        resetColor(arr[i]);
        resetColor(arr[minIndex]);
    }
    
    arr.forEach(el => highlight(el, "#00AA00"));
}

function resetSelection() {
    const arr = getElements('s');
    arr.forEach(el => resetColor(el));
}

// ===== INSERTION SORT =====
async function animateInsertionSort() {
    const arr = getElements('i');
    const n = arr.length;
    
    for(let i = 1; i < n; i++) {
        let key = parseInt(arr[i].innerHTML);
        highlight(arr[i], "#FFD700");
        await sleep(300);
        
        let j = i - 1;
        while(j >= 0 && parseInt(arr[j].innerHTML) > key) {
            highlight(arr[j], "#FF8C00");
            await sleep(300);
            
            arr[j + 1].innerHTML = arr[j].innerHTML;
            highlight(arr[j + 1], "#90EE90");
            
            resetColor(arr[j]);
            j--;
            await sleep(200);
        }
        
        arr[j + 1].innerHTML = key;
        resetColor(arr[i]);
    }
    
    arr.forEach(el => highlight(el, "#00AA00"));
}

function resetInsertion() {
    const arr = getElements('i');
    arr.forEach(el => resetColor(el));
}

// ===== QUICK SORT =====
async function animateQuickSort() {
    const arr = getElements('q');
    await quickSort(arr, 0, arr.length - 1);
    arr.forEach(el => highlight(el, "#00AA00"));
}

async function quickSort(arr, low, high) {
    if(low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = parseInt(arr[high].innerHTML);
    highlight(arr[high], "#FFD700");
    await sleep(300);
    
    let i = low - 1;
    
    for(let j = low; j < high; j++) {
        highlight(arr[j], "#FF8C00");
        await sleep(300);
        
        if(parseInt(arr[j].innerHTML) < pivot) {
            i++;
            let temp = arr[i].innerHTML;
            arr[i].innerHTML = arr[j].innerHTML;
            arr[j].innerHTML = temp;
            
            highlight(arr[i], "#90EE90");
            highlight(arr[j], "#90EE90");
            await sleep(200);
        }
        
        resetColor(arr[j]);
    }
    
    let temp = arr[i + 1].innerHTML;
    arr[i + 1].innerHTML = arr[high].innerHTML;
    arr[high].innerHTML = temp;
    
    highlight(arr[i + 1], "#90EE90");
    resetColor(arr[high]);
    await sleep(200);
    
    return i + 1;
}

function resetQuick() {
    const arr = getElements('q');
    arr.forEach(el => resetColor(el));
}