import React, { useEffect, useCallback } from 'react';
import Button from './Button';
import { data } from '../data/gears';
import {
  bodyColorPath,
  bodyOutlinePath,
  clothesColorPath,
  glovesColorPath,
  pantsColorPath,
  shoesOutlinePath,
  backpackColorPath,
  backpackOutlinePath,
  strapColorPath,
  strapOutlinePath
} from '../data/paths';
import { hairStyle } from '../data/hair';

const xmlns = 'http://www.w3.org/2000/svg';

const Character = ({
  id,
  width
}) => {
  const getRandomColor = useCallback(()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`
  }, [])

  const createPath = useCallback((path, color = '#000')=>{
    const p = document.createElementNS(xmlns, 'path');
    p.setAttribute('d', path);
    p.style.fill = color;

    return p
  }, [])

  const createElement = useCallback((item = {})=>{
    const svg = document.getElementById(`character-${id}`);
    const g = document.createElementNS(xmlns, 'g');
    const colorpaths = item.colors.map(c=>{
      g.appendChild(createPath(c.path, getRandomColor()))
      return c
    })
    const line = createPath(item.linePath)
    g.appendChild(line);
    svg.appendChild(g)
  })

  const wearBackpack = useCallback(()=>{
    const backpack = document.getElementById(`backpack-outline-${id}`);
      backpack.setAttribute("d", backpackOutlinePath);
      backpack.style.fill = '#000';
    const backpackColor = document.getElementById(`backpack-color-${id}`);
      backpackColor.setAttribute("d", backpackColorPath);
      backpackColor.style.fill = getRandomColor();
    const strapItem = data.find(x=>x.type === 'backpack')
    createElement(strapItem)
  }, [])

  const wearShoes = useCallback(()=>{
    const item = data.find(x=>x.type === 'shoes')
    createElement(item)
  }, [])

  const wearClothes = useCallback(()=>{
    const clothes = document.getElementById(`clothes-color-${id}`);
      clothes.setAttribute("d", clothesColorPath);
      clothes.style.fill = getRandomColor();
  }, [])

  const wearPants = useCallback((color = '#FFD0A9') => {
    const pants = document.getElementById(`pants-color-${id}`);
      pants.setAttribute("d", pantsColorPath);
      pants.style.fill = getRandomColor();
  }, [])

  const changeHair = useCallback(() => {
    const hair = document.querySelector('#hair');
    const newHair = hairStyle[Math.floor(Math.random()*hairStyle.length)];
    hair.setAttribute("d", newHair.linePath);
  }, [])

  const setDefaultCharacter = useCallback(()=>{
    // const svg = document.getElementsByTagName('svg')[0];
    const bodyOutline = document.getElementById(`body-outline-${id}`);
    bodyOutline.setAttribute("d", bodyOutlinePath);
    bodyOutline.style.fill = '#000';
    const bodyColor = document.getElementById(`body-color-${id}`);
    bodyColor.setAttribute("d", bodyColorPath);
    bodyColor.style.fill = '#FFD0A9';
    const gloves = document.getElementById(`gloves-color-${id}`);
    gloves.setAttribute("d", glovesColorPath);
    gloves.style.fill = getRandomColor();
    // wearBackpack()
    // wearShoes()
    // wearClothes()
    // wearPants()
  }, [
    // wearBackpack,
    // wearShoes,
    // wearClothes,
    // wearPants
  ])

  const zoomIn = useCallback(()=>{
    const svg = document.getElementsByTagName('svg')[0];
    svg.setAttribute('style',  'width: 40%; transition: all 0.3s');
    // svg.setAttribute('width',  'auto');
    // svg.setAttribute('height', 'auto');
  })

  useEffect(()=>{
    setDefaultCharacter()
  }, [setDefaultCharacter])

  return (
    <>
    <svg
      // width='300'
      // height='821'
      id={`character-${id}`}
      style={{width: width ?? '100%' }}
      viewBox='0 0 353 821'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path id={`body-color-${id}`} />
      <path id={`backpack-color-${id}`} />
      <path id={`backpack-outline-${id}`} />
      <path id={`clothes-color-${id}`} />

      {/* head */}
      <path d="M182 215.4C151.5 215.4 125.9 206.6 108 189.8C90.7001 173.7 81.6001 151.6 81.6001 125.7C81.6001 74.3 124.4 32.5 177.1 32.5C202.3 32.5 225.3 42.2 241.9 59.8C258.3 77.1 267.3 100.5 267.3 125.8C267.3 151.2 259.2 174 244.4 190C229 206.6 207.4 215.4 182 215.4Z" fill="#FFD0A9"/>
      <path d="M136 140.9C125 140.9 118.4 129.5 118.4 118.4C118.4 107.3 125 95.9 136 95.9C145.7 95.9 151.1 104.5 152.8 111.9C153.1 113.1 154.1 114 155.4 114C158.3 114.1 161.3 115.7 161.3 118.3C161.3 120.9 158.3 122.6 155.4 122.6C154.2 122.6 153.1 123.5 152.8 124.7C151.1 132.2 145.6 140.9 136 140.9Z" fill="#FFEFE1"/>
      <path d="M229.5 140.9C219.8 140.9 214.4 132.3 212.7 124.9C212.4 123.7 211.4 122.8 210.1 122.8C207.2 122.7 204.2 121.1 204.2 118.5C204.2 115.9 207.2 114.2 210.1 114.2C211.3 114.2 212.4 113.3 212.7 112.1C214.4 104.7 219.9 96.1 229.5 96.1C240.5 96.1 247.1 107.5 247.1 118.6C247.1 129.7 240.5 140.9 229.5 140.9Z" fill="#FFEFE1"/>
      <path d="M155.4 111.3C153.1 101.5 146.1 93.2 135.9 93.2C123.3 93.2 115.6 105.8 115.6 118.4C115.6 131 123.3 143.6 135.9 143.6C146.1 143.6 153.1 135.3 155.4 125.5C159.7 125.4 163.9 122.7 163.9 118.4C163.9 114.1 159.7 111.4 155.4 111.3ZM155.3 120C152.8 120.1 150.7 121.8 150.1 124.2C148.6 130.6 144 138.1 135.9 138.1C130.7 138.1 127.3 135 125.4 132.4C122.6 128.6 121 123.5 121 118.3C121 113.1 122.6 108 125.4 104.2C127.3 101.6 130.7 98.5 135.9 98.5C144 98.5 148.6 106 150.1 112.4C150.7 114.8 152.8 116.5 155.3 116.6C157 116.6 158.5 117.5 158.5 118.2C158.6 119.1 157.1 120 155.3 120Z" fill="black"/>
      <path d="M136.9 106.1C131.8 106.1 127.7 111.6 127.7 118.4C127.7 125.2 131.8 130.7 136.9 130.7C142 130.7 146.1 125.2 146.1 118.4C146.1 111.6 142 106.1 136.9 106.1Z" fill="black"/>
      <path d="M229.5 93.2C219.3 93.2 212.3 101.5 210 111.3C205.7 111.4 201.5 114.1 201.5 118.4C201.5 122.7 205.7 125.4 210 125.5C212.3 135.3 219.3 143.6 229.5 143.6C242.1 143.6 249.8 131 249.8 118.4C249.8 105.8 242 93.2 229.5 93.2ZM240 132.5C238.1 135.1 234.7 138.2 229.5 138.2C221.4 138.2 216.8 130.7 215.3 124.3C214.7 121.9 212.6 120.2 210.1 120.1C208.4 120.1 206.9 119.2 206.9 118.5C206.9 117.8 208.4 116.9 210.1 116.9C212.6 116.8 214.7 115.1 215.3 112.7C216.8 106.3 221.4 98.8 229.5 98.8C234.7 98.8 238.1 101.9 240 104.5C242.8 108.3 244.4 113.4 244.4 118.6C244.4 123.8 242.7 128.7 240 132.5Z" fill="black"/>
      <path d="M228.1 106.1C223 106.1 218.9 111.6 218.9 118.4C218.9 125.2 223 130.7 228.1 130.7C233.2 130.7 237.3 125.2 237.3 118.4C237.3 111.6 233.2 106.1 228.1 106.1Z" fill="black"/>
      <path d="M181 147.9H184.6C189.8 147.9 193.3 144.7 193.3 140C193.3 135.3 189.7 132.1 184.6 132.1C183.4 132.1 182.3 133.1 182.3 134.4C182.3 135.7 183.3 136.7 184.6 136.7C185.3 136.7 188.8 136.9 188.8 140.1C188.8 143.3 185.3 143.5 184.6 143.5H181C179.8 143.5 178.7 144.5 178.7 145.8C178.7 147.1 179.8 147.9 181 147.9Z" fill="black"/>
      <path d="M194.7 170.4C190.9 171.3 187.3 171.9 181.9 171.9C176.9 171.9 173.7 171.4 170.2 170.6C169 170.3 167.8 171.1 167.5 172.3C167.2 173.5 168 174.7 169.2 175C173 175.8 176.6 176.4 181.9 176.4C186.9 176.4 190.9 175.9 195.7 174.8C196.9 174.5 197.7 173.3 197.4 172.1C197.2 170.9 196 170.1 194.7 170.4Z" fill="black"/>
      <path id="hair" d="M202.152 31.0234C202.065 27.0429 201.212 23.1157 199.639 19.458C198.028 15.7151 195.695 12.3286 192.773 9.4932C189.851 6.65777 186.398 4.4295 182.614 2.93686C178.829 1.44423 174.787 0.716567 170.721 0.795892C166.654 0.875218 162.643 1.75991 158.92 3.39901C151.68 6.56715 133.471 14.9153 130.468 31.7856C129.737 35.9452 132.802 35.8656 136.513 35.7692C137.515 35.7431 138.564 35.7159 139.598 35.7705C107.597 49.3388 84.5345 79.301 81.4512 114.784C133.407 97.6448 163.676 66.5811 168.039 43.7863C170.59 45.6699 173.204 47.6855 175.929 49.7865C194.811 64.3476 219.017 83.013 264.601 90.2946C254.843 61.2617 232.202 38.8664 202.152 31.0234Z" fill="black"/>
      <path d="M179.9 234.7C177.5 234.7 175 234.4 172.7 233.7L165.2 231.7C163.6 231.3 162.5 229.8 162.5 228.2V205H197V228.2C197 229.8 195.9 231.3 194.3 231.7L187.3 233.6C184.9 234.4 182.4 234.7 179.9 234.7Z" fill="#FFD0A9"/>

      <path id={`pants-color-${id}`} />
      <path id={`gloves-color-${id}`} />
      <path id={`body-outline-${id}`} />
      <path id={`shoes-outline-${id}`} />
      <path id={`strap-color-${id}`} />
      <path id={`strap-outline-${id}`} />
    </svg>
    <div style={{margin: '2em 0'}}>
      <Button variant="primary" style={{margin: '4px'}} onClick={wearClothes}>穿衣服</Button>
      <Button variant="primary" style={{margin: '4px'}} onClick={wearPants}>穿褲子</Button>
      <Button variant="primary" style={{margin: '4px'}} onClick={wearShoes}>穿鞋子</Button>
      <Button variant="primary" style={{margin: '4px'}} onClick={wearBackpack}>揹背包</Button>
      <Button variant="primary" style={{margin: '4px'}} onClick={changeHair}>換髮型</Button>
    </div>
    </>
    )
}

export default Character
