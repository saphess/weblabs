const firstDay = 6; //  день недели
const startDay = 5; // колво клеток перед первым днем
const daysInMonth = 31;

let html = `
        <h3>Март 2025</h3>
        <table>
            <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
            </tr>
            <tr>
    `;

for (let i = 0; i < startDay; i++) {
    html += '<td></td>';
}

let day = 1;
while (day <= daysInMonth) {
    // проверка на понедельник
    if ((day + startDay) % 7 === 1 && day !== 1) {
        html += '</tr><tr>';
    }

    html += `<td>${day}</td>`;
    day++;
}

html += '</tr></table>';
document.getElementById('calendar').innerHTML = html;