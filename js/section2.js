export const section2 = document.createElement('div');
section2.innerHTML = `
<div class="section second-section">
        <div class="section__header flex">
            <p class="font-yellow large">ВЫБОР ДЕТАЛЕЙ</p>
            <p>УКАЖИТЕ, ЧТО ВЫ ХОТИТЕ ВИДЕТЬ В ВАШЕМ ОФИСЕ </p>
            <p class="small"><span class="font-yellow large"> * </span>ПО ВАШЕМУ ТЗ/ЕСТЬ ВЫБОР</p>
        </div>
        <table class="section__table">
            <tr class="akrobat large">
                <td>СТЕНА «А»</td>
                <td>ПРОСТРАНСТВО</td>
                <td>СТЕНА «В»</td>
            </tr>
            <tr>
                <td>
                <form id="wall_a">
                    <table>
                        <tr>
                            <td>
                                <img class="icons" src="img/icon-graffiti.png" alt="">
                                <p class="small">ГРАФФИТИ </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-picture.png" alt="">
                                <p class="small">КАРТИНА </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-lamp.png" alt="">
                                <p class="small">ВЫВЕСКА</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall_a" id="graffiti" checked>
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall_a" id="picture">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall_a" id="lamp">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                 </form>   
                </td>

                <td class="borders">
                <form id="space">
                    <table>
                        <tr>
                            <td>
                                <img class="icons" src="img/icon-projector.png" alt="">
                                <p class="small">ПРОЖЕКТОР </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-board.png" alt="">
                                <p class="small">БОРД </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-plant.png" alt="">
                                <p class="small">РАСТЕНИЕ</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="space" id="projector" checked>
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="space" id="board">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="space" id="plant">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                    </form>
                </td>

                <td>
                <form id="wall_b">
                    <table>
                        <tr>
                            <td>
                                <img class="icons" src="img/icon-mirror.png" alt="">
                                <p class="small">ЗЕРКАЛЬНАЯ </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-glass.png" alt="">
                                <p class="small">СТЕКЛЯНАЯ </p>
                            </td>
                            <td>
                                <img class="icons" src="img/icon-magnet.png" alt="">
                                <p class="small">МАГНИТНАЯ</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall-b" id="mirror" checked>
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall-b" id="glass">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="radio" name="wall-b" id="magnet">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                    </form>
                </td>

            </tr>
            <tr>
                <td class="second-section_img">
                    <div id="field_2"></div>
                </td>
                <td class="second-section_img">
                    <div id="field_3"></div>
                </td>
                <td class="second-section_img">
                    <div id="field_4"></div>
                </td>
            </tr>
            <tr class="section__footer">
                <td></td>
                <td>
                    <button id="result">РЕЗУЛЬТАТ</button>
                </td>
                <td></td>
            </tr>
        </table>
    </div>
`