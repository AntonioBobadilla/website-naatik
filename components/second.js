
import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styles from '../styles/Slides.module.css';
import styled from 'styled-components';
import classNames from 'classnames';
import ButtonTemplate from '../components/Button';

const Second = ({setnums, send, goBack}) => {


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(50);
    const [num3, setNum3] = useState(100);
    
    let a = 0;
    let b = 0;
    let c = 0;
    
    const getQueryStringParams = query => {
        return query
            ? (/^[?#]/.test(query) ? query.slice(1) : query)
                .split('&')
                .reduce((params, param) => {
                        let [key, value] = param.split('=');
                        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                        return params;
                    }, {}
                )
            : {}
    };
    
    useEffect(() => {
        const { data } = getQueryStringParams(window.location.search);
      }, []);
    
    const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 14px;
    `;
    
    const StyledThumb = styled.div`
    height: 45px;
    line-height: 25px;
    width: 45px;
    text-align: center;
    background-color: #00AEEF;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    top:-15px;
    display: flex;
    align-items:center;
    justify-content:center;
    `;
    
    const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;
    
    const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: #3A5057;
    border-radius: 10px;
    `;
    
    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
    
    const updateValues = () => {
    setnums({"first-slide": a, "second-slide":b, "third-slide":c})
    send({"first-slide": a, "second-slide":b, "third-slide":c})
    }

    return ( 
        <div className={styles.main}>
        <h1>Configuración del modelo</h1>
            <div className={styles.wrapper}>
                <p>Porcentaje de Probabilidad de Abandono</p>
                <p className={styles.information}>i</p>
                <div className={styles.hide}>
                    <h4>Deslice para ajustar los grupos.</h4>

                    <div className={classNames(styles.hide_item, styles.white_item)}>
                        <p>Sin churn</p>
                        <p>0-25</p>
                    </div>
                    <div className={classNames(styles.hide_item, styles.gray_item)}>
                        <p>Probabilidad baja</p>
                        <p>25-50</p>
                    </div>
                    <div  className={classNames(styles.hide_item, styles.white_item)}>
                        <p>Probabilidad media</p>
                        <p>50-75</p>
                    </div>
                    <div className={classNames(styles.hide_item, styles.gray_item)}>
                        <p>Probabilidad alta</p>
                        <p>75-100</p>
                    </div>
                </div>
                <StyledSlider defaultValue={[num1,num2,num3]} renderTrack={Track} renderThumb={Thumb} onChange={([num1,num2,num3], index) => {
                    if (index == 0) {
                        a = num1;
                    } else if(index == 1){ 
                        b = num2;
                    }else { 
                        c = num3;
                    }
                }} />
                <div className={styles.numbers}>
                    <p>{num1}%</p>
                    <p>{num2}%</p>
                    <p>{num3}%</p>
                </div>
                <div className={styles.buttons}>
                    <ButtonTemplate text={"atrás"} click={goBack} />
                    <ButtonTemplate text={"siguiente"} click={updateValues} />
                </div>

                {/*<button onClick={updateValues}>Siguiente xd</button>*/}
            </div>
        </div>
     );
}
 
export default Second;