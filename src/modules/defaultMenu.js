export const defaultMenu = (() => {
    const topMenu = document.querySelector('.top-menu-content')

    JSON.stringify(localStorage.setItem('defaultMenu', '["Todas", "Semana", "Concluidas"]'))

    const loadDefault = JSON.parse(localStorage.getItem('defaultMenu'))
    topMenu.insertAdjacentHTML('beforeend', `
        <div class="all-tasks">
          <button class="menu-btn all-tasks-btn"><i class="fa-solid fa-inbox"></i>${loadDefault[0]}</button>
        </div>
        <div class="week-tasks">
          <button class="menu-btn week-tasks-btn"><i class="fa-solid fa-calendar-week"></i>${loadDefault[1]}</button>
        </div>
        <div class="completed-tasks">
          <button class="menu-btn completed-tasks-btn"><i class="fa-solid fa-check-double"></i>${loadDefault[2]}</button>
        </div>
    `)
})()