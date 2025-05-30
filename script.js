const upgradeCosts = [
    { manual: 5, blueprint: 5, book: 0 },
    { manual: 40, blueprint: 15, book: 0 },
    { manual: 60, blueprint: 40, book: 0 },
    { manual: 80, blueprint: 100, book: 0 },
    { manual: 100, blueprint: 200, book: 0 },
    { manual: 120, blueprint: 300, book: 0 },
    { manual: 140, blueprint: 400, book: 0 },
    { manual: 200, blueprint: 400, book: 0 },
    { manual: 300, blueprint: 400, book: 0 },
    { manual: 420, blueprint: 420, book: 0 },
    { manual: 560, blueprint: 420, book: 0 },
    { manual: 580, blueprint: 450, book: 15 },
    { manual: 580, blueprint: 450, book: 30 },
    { manual: 600, blueprint: 500, book: 45 },
    { manual: 600, blueprint: 500, book: 70 },
    { manual: 650, blueprint: 550, book: 100 }
];

document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll("select");
    for (const select of selects) {
        for (let i = 0; i <= 16; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    }
});

function calculate() {
    const allSelects = document.querySelectorAll("#charmForm select");
    const results = { manual: 0, blueprint: 0, book: 0 };

    // 每 6 個 select 一組：3 個 From、3 個 To
    for (let i = 0; i < allSelects.length; i += 6) {
        for (let j = 0; j < 3; j++) {
            const from = parseInt(allSelects[i + j].value) || 0;
            const to = parseInt(allSelects[i + 3 + j].value) || 0;

            for (let lvl = from; lvl < to; lvl++) {
                results.manual += upgradeCosts[lvl]?.manual || 0;
                results.blueprint += upgradeCosts[lvl]?.blueprint || 0;
                results.book += upgradeCosts[lvl]?.book || 0;
            }
        }
    }

    document.getElementById("result").innerHTML = `
    <p><strong>所需總材料：</strong></p>
    <ul>
      <li>Charm Design (手冊): ${results.manual}</li>
      <li>Charm Guide (圖紙): ${results.blueprint}</li>
      <li>Charm Book (秘典): ${results.book}</li>
    </ul>
  `;
}

