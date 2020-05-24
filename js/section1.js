export const section1 = document.createElement('div');
section1.innerHTML = `
<div class="section">
        <table class="section__table">
            <tr class="section__header">
                <td>КОЛИЧЕСТВО</td>
                <td class="font-yellow large">ВЫБОР ОФИСА</td>
                <td>СТИЛЬ</td>
            </tr>
            <tr>
                <td>
                <form id="person_number">
                <table class="persons-number">
                        <tr>
                            <td>
                                <label for="45">
                                <img class="icons" src="img/person0.png" alt="">
                                    <p class="small">
                                        4-5 ЧЕЛОВЕК
                                    </p>
                                </label>
                                
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number"
                                     id="45" checked value="45">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>                     
                            <td>
                            <label for="78">
                                <img class="icons" src="img/persons1.png" alt="">
                                <p class="small">
                                    7-8 ЧЕЛОВЕК
                                </p>
                             </label>   
                            </td>
                           
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="78">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="1012">
                                <img class="icons" src="img/persons2.png" alt="">
                                <p class="small">
                                    10-12 ЧЕЛОВЕК
                                </p>
                                </label>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="1012">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="1520">
                                <img class="icons" src="img/persons3.png" alt="">
                                <p class="small">
                                    15-20 ЧЕЛОВЕК
                                </p>
                                </label>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="1520">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="more">
                                <img class="icons" src="img/persons-more.png" alt="">
                                <p class="small">
                                    БОЛЬШЕ
                                </p>
                                </label>
                            </td>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="persons_number" id="more">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                        </tr>

                    </table>
                </form>
                    
                </td>
                <td class="section__main-img">
                
                
                    <div id="field_1"></div>
                    
                    
                </td>
                <td>
                <form id="office_style">
                 <table>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input checked class="radio__input" type="radio" name="office_style" id="classic">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label for="classic">
                                    <img class="icons" src="img/style-classic.png" alt="">
                                    <p class="small">
                                        NEW CLASSIC
                                    </p>
                                </label>                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="loft">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label for="loft">
                                <img class="icons" src="img/style-loft.png" alt="">
                                <p class="small">
                                    WHITE LOFT
                                </p>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="wood">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label for="wood">
                                <img class="icons" src="img/style-wood.png" alt="">
                                <p class="small">
                                    EСО WOOD
                                </p>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_style" id="shell">
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                                <label for="shell">
                                <img class="icons" src="img/style-shell.png" alt="">
                                <p class="small">
                                    SHELL & CORE
                                </p>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="radio option">
                                    <input class="radio__input" type="radio" name="office_bonus" id="services" checked disabled>
                                    <div class="radio__icon"></div>
                                </label>
                            </td>
                            <td>
                            <label for="services" class="flex">
                                <p>
                                    <span class="font-yellow large">10</span><br>
                                    <span class="small">СЕРВИСОВ <br>+ ЮР. АДРЕС</span>
                                </p>
                                <img class="services" src="img/office-services.png" alt="">
                             </label>   
                            </td>
                        </tr>
                    </table>
                </form>
                   

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
`