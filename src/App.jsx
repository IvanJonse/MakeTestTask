import React, {useState, useRef} from 'react'
import './style.sass';
import logo from './assets/logo.svg'
import menu from './assets/menu.svg'
import { CSSTransition } from "react-transition-group";
import Menu from './Components/Menu';
import note from './assets/note.jpg'
import Bitmap from './assets/Bitmap.jpg'
import phone from './assets/phone.jpg'
import Layout from './Components/Layout';
import TypographyDescr from './Components/TypographyDescr';
import { TextField} from '@mui/material';
import { useForm } from 'react-hook-form';
import SelectName from './Components/SelectName';
import RadioButton from './Components/RadioButton';
import ChekBoxButton from './Components/ChekBoxButton';
import AccordionMenu from './Components/AccordionMenu';
import SideMenu from './Components/SideMenu';

function App() {

  const [open, setOpen] = useState(false);

  const [tab, setTab] = useState('deskTop');
  
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  const useScroll = () => {
    const elRef = useRef(null);   
    const executeScroll = () => elRef.current.scrollIntoView({behavior: "smooth"});
    return [executeScroll, elRef];
  };
    
    const [ui, setUi] = useScroll();

    const [typo, setTypo] = useScroll();

    const [harangue, setHarangue] = useScroll();

    const [grid, setGrid] = useScroll();

  return (

    <div className="App">
      <header className="App__header">
        <div className='App__header__inner'>
            <div className='App__header__logo'>
              <div className='App__header__logo__img'>
                <img className='App__header__logo__img__item' src={logo} alt='logo'/>
              </div>
              <div className='App__header__logo__title'>
                <div className='App__header__logo__title__bold'>Кенн</div>
                <div className='App__header__logo__title__small'>Иван Юрьевич</div>
              </div>
            </div>

            {  !open &&
              <div className='App__header__menu' onClick={() => setOpen(true)}>
                <img className='App__header__menu__item' src={menu} alt='menu'/>
              </div>
            }

             { open &&
                <div className='App__isOpen__close' onClick={() => setOpen(false)}></div>
             }
          
            <CSSTransition in={open} classNames='show' timeout={300} unmountOnExit>
             <Menu/>
            </CSSTransition>
        </div>
      </header>

      <div className='container'>

        <SideMenu ui={ui} typo={typo} harangue={harangue} grid={grid}/>

        <div className='wrapper'>
          
          <section className='harangue' id='harangue' >
          
              <div className='harangue__title' ref={setHarangue}>
                  Тестовое задание
              </div>
              <div className='harangue__subtitle'>Уровень: junior</div>
              <div className='harangue__descr'>
                  Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку.
                  В шапке страницы укажи своё ФИО, так всем будет удобнее.
                  В менюхе под иконкой бургером мы хотели бы также видеть твои данные.
                  Ну что, поехали?
              </div>
            
          </section>
          <section className='grid' id='grid' >
          
              <div className='harangue__title' ref={setGrid}>
                  Сетка
              </div>
            
              <div className='harangue__descr' style={{'marginTop':'24px'}}>
                    Задание предполагает адаптивную вёрстку. 
                    Используется 3 состояния в зависимости от устройства. 
                    Сетка «резиновая» — переменной ширины.
              </div>
          
          </section>
          <section className='layout' id='layout'>
            <Layout 
              title='Десктоп (1200+)' 
              content='1072–1312'
              column='12'
              width='60-80'
              space='32'
              img={note}
            />
            <Layout 
              title='Планшет (736+)' 
              content='672–928'
              column='8'
              width='56-88'
              space='32'
              img={Bitmap}
            />
            <Layout 
              title='Телефон (320+)' 
              content='296–424'
              column='4'
              width='56-88'
              space='24'
              img={phone}
            />
          </section>
          <section className='typography' id='typography' >

            <div className='harangue__title' ref={setTypo}>
                  Типографика
            </div>
          
            <div className='harangue__descr' style={{'marginTop':'24px'}}>
                  Используется шрифт Graphik. 
                  На телефонах стили типографики переопределяются
            </div>
                
            <div className='typography__menu'>
                  <ul className='typography__menu__ul'>
                    <li onClick={() => {
                        setTab('deskTop')
                    }} className={tab === 'deskTop' ? 'typography__menu__item__active typography__menu__item' : 'typography__menu__item'}>
                          Десктоп
                    </li>
                    <li onClick={() => {
                        setTab('phone')
                    }} className={tab === 'phone' ? 'typography__menu__item__active typography__menu__item' : 'typography__menu__item'}>
                          Телефон
                    </li>
                  </ul>      
            </div>
            { tab === 'deskTop' 
              ?
                <TypographyDescr tab={tab} h1='48' h2='32' h3='24' h4='18' p1='24' p2='18' p3='16' p4='14'/> 
              : <TypographyDescr tab={tab} h1='32' h2='28' h3='20' h4='18' p1='20' p2='18' p3='16' p4='14'/> 
            }  
          </section>
          <section className='ui' id='ui' >
            <div className='harangue__title' style={{'fontSize':'32px', 'textTransform':'uppercase'}} ref={setUi}>
                ui
            </div>
            <div className='layout'>
                Текстовое поле  
            </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className='ui__form'>
              <TextField 
                type='email'
                autoComplete='email' 
                variant='filled' 
                label='email' 
                margin='normal'
                {...register('email', {required: 'Required field!', pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Неверный формат E-mail!'
                }})}
                error={!!errors?.email}
                helperText={errors?.email ?  errors.email.message : null}
              />
              <button type='submit' className='ui__btn'>Отправить</button>
            </div>
          </form>
            <div className='layout' style={{'marginTop':'64px', 'marginBottom':'24px'}}>
                  Выпадающий список 
            </div>
            <div className='harangue__descr' style={{'marginTop':'24px', 'marginBottom':'48px'}}>
                  Компонент состоит из текстового поля и выпадающей подсказки
            </div>
          
            <SelectName/>

            <div className='layout' style={{'marginTop':'232px', 'marginBottom':'76px'}}>
                  Кнопка 
            </div>

            <button type='submit' style={{'marginBottom':'64px', 'marginLeft':'0'}} className='ui__btn'>Отправить</button>
            <button disabled={true} type='submit' style={{'marginBottom':'64px'}} className='ui__btn'>Отправить</button>

            <div className='layout' style={{'marginBottom':'32px'}}>
                  Чекбокс, радиобаттон
            </div>
            <div className='ui__buttonWrap'>
              <ChekBoxButton/>
              <RadioButton/>
            </div>
            <div className='layout' style={{'marginBottom':'32px'}}>
                Аккордеон
            </div>
            <AccordionMenu/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
