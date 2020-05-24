const root = document.querySelector('#root.container');
root.innerHTML = `
<div class="section">
        <table class="section__table">
            <tr class="section__header">
                <td>КОЛИЧЕСТВО</td>
                <td class="font-yellow large">ВЫБОР ОФИСА</td>
                <td>СТИЛЬ</td>
            </tr>
            <tr>
                <td>
                    <table class="persons-number">
                        <tr>
                            <td>
                                <img class="icons" src="img/person0.png" alt="">
                                <p class="small">
                                    4-5 ЧЕЛОВЕК
                                </p>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="icons" src="../img/persons1.png" alt="">
                                <p class="small">
                                    7-8 ЧЕЛОВЕК
                                </p>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="icons" src="../img/persons2.png" alt="">
                                <p class="small">
                                    10-12 ЧЕЛОВЕК
                                </p>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="icons" src="../img/persons3.png" alt="">
                                <p class="small">
                                    15-20 ЧЕЛОВЕК
                                </p>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="icons" src="../img/persons-another.png" alt="">
                                <p class="small">
                                    ДРУГОЕ
                                </p>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>

                    </table>
                </td>
                <td class="section__main-img">
                    <div> #1</div>
                </td>
                <td>
                    <table>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <img class="icons" src="../img/style-classic.png" alt="">
                                <p class="small">
                                    NEW CLASSIC
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <img class="icons" src="../img/style-loft.png" alt="">
                                <p class="small">
                                    WHITE LOFT
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <img class="icons" src="../img/style-wood.png" alt="">
                                <p class="small">
                                    EСО WOOD
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <img class="icons" src="../img/style-shell.png" alt="">
                                <p class="small">
                                    SHELL & CORE
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_bonus" id="" checked disabled>
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td class="flex">
                                <p>
                                    <span class="font-yellow large">10</span><br>
                                    <span class="small">СЕРВИСОВ <br>+ ЮР. АДРЕС</span>
                                </p>
                                <img class="services" src="../img/office-services.png" alt="">
                            </td>
                        </tr>
                    </table>

                </td>
            </tr>
            <tr class="section__footer">
                <td></td>
                <td>
                    <button id="next">ДАЛЬШЕ</button>
                </td>
                <td></td>
            </tr>
        </table>
    </div>
`;

const nextBtn = root.querySelector('button#next');
nextBtn.addEventListener('click',()=>{
    root.innerHTML = `
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
                    <table>
                        <tr>
                            <td>
                                <img class="icons" src="img/icon-graffity.png" alt="">
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
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                </td>

                <td class="borders">
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
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                </td>

                <td>
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
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label class="check option">
                                    <input class="radio__input" type="checkbox" name="wall-A" id="">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                    </table>
                </td>

            </tr>
            <tr>
                <td class="second-section_img">
                    <div>#2</div>
                </td>
                <td class="second-section_img">
                    <div>#3</div>
                </td>
                <td class="second-section_img">
                    <div>#4</div>
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
    `;

    const resultBtn = root.querySelector('button#result');
    resultBtn.addEventListener('click',()=>{
        root.innerHTML = `
        <div class="section last-section">
        <div class="section__header">
            <p>ВАШ ОФИС</p>
        </div>


        <div class="section-main">
            <div class="section-main__col">
                <div class="section-main__big-pic">
                    <div class="content">#5</div>
                </div>
            </div>
            <div class="section-main__coll">
                <div class="section-main__med-pic">
                    <div class="content">#6</div>
                </div>
                <div class="section-main__med-pic">
                    <div class="content">#7</div>
                </div>
                <div class="section-main__med-pic">
                    <div class="content">#8</div>
                </div>
            </div>
            <div class="section-main__coll">
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
                <div class="section-main__small">
                    <label class="check option">
                        <input class="radio__input" type="checkbox" name="wall-A" id="">
                        <div class="radio__icon"></div>
                    </label>
                    <div class="section-main__small-pic">#10</div>
                </div>
            </div>
        </div>
        <div class="section-footer">
            <div class="section-footer__row">
                <div class="section-footer__col">
                    <div class="text">
                        ОБЩАЯ СТОИМСОТЬ ВЫБРАНОГО ВАМИ ОФИСА
                    </div>
                </div>
                <div class="section-footer__col">
                    <div class="price">
                        #16
                    </div>
                </div>
            </div>
            <div class="section-footer__row">
                <div class="section-footer__col">
                    <input class="input" type="text" name="" id="" placeholder="имя">
                    <input class="input" type="tel" name="" id="" placeholder="телефон">
                    <input type="button" value="ХОЧУ ТАКОЙ ОФИС">
                </div>
                <div class="section-footer__col">
                    <div class="tel">
                        8 (495) 137-75-75
                    </div>
                </div>
            </div>
        </div>

    </div>
        `
    })
});
