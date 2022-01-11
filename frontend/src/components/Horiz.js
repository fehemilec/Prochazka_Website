import React, {useState} from 'react';
import '../App.css';
import './Horiz.css';

function Horiz() {
    const [age1, setAge1] = useState();
    const [age2, setAge2] = useState();
    const [age3, setAge3] = useState();
    const [age4, setAge4] = useState();

const handleChange1 = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAge1(value);
};

const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge2(value);
  };

const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge3(value);
  };

const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAge4(value);
  };

  return (
            <div className='horiz-container'>                          
                <div className='blokVnitrek'>
                    <div className="levy">
                        <h3>ISOLINE PRIM</h3>
                    <div className="pocet">
                        <span className="popis">Zadejte počet</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="1" value={age1} id="pocet"
                                   name="pocet" maxLength="4" onChange={handleChange1} 
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                        </span>
                    </div>
                    <div className="sirka">
                        <span className="popis">Zadejte šířku</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={age2} id="sirka" 
                                   name="sirka" maxLength="4" onChange={handleChange2} 
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off"/>
                                <span className="jednotka">mm</span>
                        </span>
                    </div>
                    <div className="vyska">
                        <span className="popis">Zadejte výšku</span>
                        <span className="hodnota">
                            <textarea type="text" className="hodnota" defaultValue="0" value={age3} id="vyska" 
                                   name="vyska" maxLength="4" onChange={handleChange3}
                                   onKeyDown="LUKY.prepocitejCenu()" autoComplete="off" />
                            <span className="jednotka">mm</span>
                        </span>
                    </div>
                    <div className="cenaRozmery">
                        <span className="popis">Cena základní</span>
                        <span className="hodnota">
                            <span id="cenaRozmery"> 0 </span> 
                            CZK 
                        </span>
                    </div>
                    
                    <div className="stahovaniPopis">Ovládání</div>
                    
                    <div className="stahovaniHodnoty">
                        <input type="radio" name={'ovladani'} id={'vlevo'} value={'vlevo'}
                               defaultChecked ={'true'} onChange="LUKY.prepocitejCenu()"/>
                            <label htmlFor="vlevo" className="hodnota">vlevo</label>
                        <input type="radio" name={'ovladani'} id={'vpravo'} value={'vpravo'}
                               onChange=""/>
                            <label htmlFor="vpravo" className="hodnota">vpravo</label>
                        </div>
                        
                        <div className="delkaOvladani">
                            <span className="popis">Délka ovládání</span>
                            <span className="hodnota">
                                <textarea type="text" className="hodnota" defaultValue="700" value={age4} name="delkaOvladani"
                                    maxLength="4" onChange={handleChange4} onKeyDown="LUKY.prepocitejCenu()"/>
                                <span className="jednotka">mm</span>
                            </span>
                        </div>

                        <div className="brzda">
                            <input type="checkbox" name="brzda" id="brzda" 
                            onChange="LUKY.prepocitejCenu();"/>
                                <label htmlFor="brzda" className="hodnota">
                                    <span className="nazev">
                                    Brzda (zastaví žaluzii v požadované poloze/zabrání samovolnému sjíždění)
                                        <span className="cena"><br /> +25 CZK </span>
                                    </span>
                                </label>
                        </div>
                    </div>

                    <div className='lastTwoCol'>
                    <div className="stredCol">
                        <div className="stred"> </div>
                    </div>
                    
                    <div className="infoCol">
                    <div className="info">
                        <div>
                            Maximální rozměry naleznete v sekci TECHNICKÝ POPIS <br />Dodací lhůta je 7-9 dnů. <br /> <br />
                        </div>
                        <ul className="a">
                            <li className='one'>v rozmezí od 250 do 2200 mm</li>
                            <li className='two'>v rozmezí od 250 do 2200 mm</li>
                            <li className='three'>standardně z výroby 2/3 výšky</li>
                        </ul>
                        <div>&nbsp;</div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/Instance/lukyshop/Sablona/Sablona/Komponenta/Luky/Detail/Slozka23/Cenik/CZ_Navod_na_vymereni_a_montaz.pdf">
                                NÁVOD NA ZAMĚŘENÍ A MONTÁŽ
                            </a>
                        </div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/technicky-popis-s33CZ">
                                TECHNICKÝ POPIS
                            </a>
                        </div>
                        <div>
                            <a href="https://www.zaluzienejlevneji.shop/fotogalerie-s65CZ">
                                FOTOGALERIE
                            </a>
                        </div>
                    </div>
                    </div> </div>

                </div>

                {/*-----------

                <div className='pallete1'>                            
                    <div className='subPallete1'>
                        <div className='chosenPallete'>
                            <h3>ZÁKLADNÍ BARVY</h3>
                            <div className='chosenTop'></div>                            
                            <div className='chosenBottom'></div>
                        </div>
                        <div className='palletes'></div>
                    </div>
                    <div className='subPallete2'>
                        <div className='chosenPallete'>
                            <h3>PŘÍPLATKOVÉ BARVY</h3>
                            <div className='chosenTop'></div>                            
                            <div className='chosenBottom'></div>
                        </div>
                        <div className='palletes'></div>
                    </div>
                </div>

                -----------*/}

            </div>
        );
}

export default Horiz;
