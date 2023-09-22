let tasks = [];
let selectedTaskIndex = -1; // 선택한 할 일 항목 인덱스

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        tasks.push({ text: taskText, memo: "" });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.textContent = tasks[i].text;

        // 할 일 목록 클릭 시 메모 인터페이스 표시
        taskItem.addEventListener("click", () => {
            selectedTaskIndex = i;
            showMemoInterface();
        });

        taskList.appendChild(taskItem);
    }
}

function showMemoInterface() {
    const memoInterface = document.getElementById("memoInterface");
    memoInterface.style.display = "block";
}

function addMemo() {
    const memoText = document.getElementById("memoText").value;
    
    if (selectedTaskIndex !== -1) {
        tasks[selectedTaskIndex].memo = memoText;
        selectedTaskIndex = -1;
        hideMemoInterface();
        displayTasks();
    }
}

function hideMemoInterface() {
    const memoInterface = document.getElementById("memoInterface");
    memoInterface.style.display = "none";
}
