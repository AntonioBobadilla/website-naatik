
import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import styles from '../styles/Slides.module.css';
import styled from 'styled-components';
import classNames from 'classnames';
import ButtonTemplate from '../components/Button';

const StyledSlider = styled(ReactSlider)`
width: 100%;
height: 14px;
`;

const StyledThumb1 = styled.div`
height: 45px;
line-height: 25px;
width: 45px;
text-align: center;
background-color: #28A745;
color: #fff;
border-radius: 50%;
cursor: grab;
top:-15px;
display: flex;
align-items:center;
justify-content:center;
`;
const StyledThumb2 = styled.div`
height: 45px;
line-height: 25px;
width: 45px;
text-align: center;
background-color: #FFC107;
color: #fff;
border-radius: 50%;
cursor: grab;
top:-15px;
display: flex;
align-items:center;
justify-content:center;
`;

const StyledThumb3 = styled.div`
height: 45px;
line-height: 25px;
width: 45px;
text-align: center;
background-color: #FD7E14;
color: #fff;
border-radius: 50%;
cursor: grab;
top:-15px;
display: flex;
align-items:center;
justify-content:center;
`;

const StyledTrack = styled.div`
top: 0;
bottom: 0;
background: #3A5057;
border-radius: 10px;
`;

const Second = ({setnums, send, goBack, slides}) => {

    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(50);
    const [num3, setNum3] = useState(99);

    const [sliders, setSliders] = useState([1, 50, 99])

    
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
    

    
    const Thumb = (props, state) => {
       if (props.key === 'thumb-0')
        return ( <StyledThumb1 {...props}>{state.valueNow}</StyledThumb1> );
       else if (props.key === 'thumb-1')
        return ( <StyledThumb2 {...props}>{state.valueNow}</StyledThumb2> );
       else
        return ( <StyledThumb3 {...props}>{state.valueNow}</StyledThumb3> );
    }
    

    
    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
    
    const updateValues = () => {
        //setnums({"first-slide": a, "second-slide":b, "third-slide":c})
        send({"first-slide": sliders[0], "second-slide": sliders[1], "third-slide": sliders[2]})
    }

    return ( 
        <div className={styles.main}>
        <h1>Configuraci??n del modelo</h1>
            <div className={styles.wrapper}>
                <p>Porcentaje de Probabilidad de Abandono</p>
                <p className={styles.information}>i</p>
                <div className={styles.hide}>
                    <h4>Deslice para ajustar los grupos.</h4>

                    <div className={classNames(styles.hide_item, styles.white_item)}>
                        <p>Sin churn</p>
                        <p>0-{sliders[0]}</p>
                    </div>
                    <div className={classNames(styles.hide_item, styles.gray_item)}>
                        <p>Probabilidad baja</p>
                        <p>{sliders[0]}-{sliders[1]}</p>
                    </div>
                    <div  className={classNames(styles.hide_item, styles.white_item)}>
                        <p>Probabilidad media</p>
                        <p>{sliders[1]}-{sliders[2]}</p>
                    </div>
                    <div className={classNames(styles.hide_item, styles.gray_item)}>
                        <p>Probabilidad alta</p>
                        <p>{sliders[2]}-100</p>
                    </div>
                </div>
                <StyledSlider defaultValue={sliders} minDistance={1} min={1} max={99} renderTrack={Track} renderThumb={Thumb} onChange={currentSliders => {
                    setSliders([...currentSliders])
                }}         
                onAfterChange={currentSliders => {
                    setSliders([...currentSliders]);
                 }}/>
                <div className={styles.numbers}>
                    <p>{num1}%</p>
                    <p>{num2}%</p>
                    <p>{num3}%</p>
                </div>
                <div className={styles.buttons}>
                    <ButtonTemplate text={"atr??s"} click={goBack} />
                    <ButtonTemplate text={"siguiente"} click={updateValues} />
                </div>
            </div>
        </div>
     );
}
 
export default Second;