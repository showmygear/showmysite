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
    hair.setAttribute("d", 'M17.0022 10.6257C23.1293 5.00985 31.2682 1.58742 40.2004 1.58742C52.9228 1.58742 64.0368 8.53124 70.0182 18.8653C69.6832 19.3493 69.3709 19.8958 69.0855 20.4967C62.7511 11.2651 52.1762 5.21753 40.2004 5.21753C31.1132 5.21753 22.8319 8.7 16.5986 14.4131L17.0022 14.8608C23.1293 9.24495 31.2682 5.82253 40.2004 5.82253C52.102 5.82253 62.596 11.8993 68.7974 21.1436C68.4645 21.9406 68.1757 22.8181 67.9387 23.7599C61.5172 15.4224 51.4803 10.0574 40.2004 10.0574C31.1132 10.0574 22.8319 13.5398 16.5986 19.2529L17.0022 19.7006C23.1293 14.0848 31.2682 10.6624 40.2004 10.6624C51.4626 10.6624 61.4646 16.1038 67.7613 24.5216C67.4006 26.2037 67.2002 28.0649 67.2002 30.0227C67.2002 37.5406 70.1551 43.6352 73.8002 43.6352C77.4453 43.6352 80.4002 37.5406 80.4002 30.0227C80.4002 22.5047 77.4453 16.4102 73.8002 16.4102C72.5602 16.4102 71.4001 17.1154 70.4091 18.342C64.294 7.9491 53.0541 0.982422 40.2004 0.982422C31.1132 0.982422 22.8319 4.46489 16.5986 10.178L17.0022 10.6257ZM12.5996 30.0227C12.5996 37.5406 9.91332 43.6352 6.59961 43.6352C3.2859 43.6352 0.599609 37.5406 0.599609 30.0227C0.599609 22.5047 3.2859 16.4102 6.59961 16.4102C9.91332 16.4102 12.5996 22.5047 12.5996 30.0227Z');
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
      <path id="hair" d="M263.2 89.9C263.1 89.7 263 89.5 262.9 89.2C262.5 88.2 262.1 87.2 261.7 86.3C261.6 86.2 261.6 86.1 261.5 85.9C261.1 85 260.7 84.1 260.3 83.3C260.2 83.1 260.1 82.9 260 82.7C259.6 81.8 259.1 80.8 258.6 79.9C258.5 79.7 258.4 79.5 258.3 79.4C257.9 78.6 257.4 77.8 257 76.9C256.9 76.8 256.8 76.6 256.8 76.5C256.3 75.6 255.8 74.7 255.2 73.8C255.1 73.6 255 73.4 254.8 73.2C254.3 72.4 253.8 71.5 253.2 70.7C253.2 70.6 253.1 70.6 253.1 70.5C252.5 69.6 251.9 68.8 251.3 67.9C251.2 67.7 251 67.5 250.9 67.3C250.3 66.5 249.7 65.6 249 64.8C249 64.7 248.9 64.7 248.8 64.6C248.2 63.8 247.6 63.1 247 62.3C246.9 62.1 246.7 61.9 246.6 61.8C245.9 61 245.3 60.3 244.6 59.5C244.5 59.4 244.4 59.2 244.3 59.1C243.7 58.4 243.1 57.8 242.4 57.1C242.3 57 242.1 56.8 242 56.7C241.3 56 240.6 55.3 239.8 54.6C239.6 54.5 239.5 54.3 239.3 54.2C238.6 53.6 237.9 52.9 237.2 52.3C237.1 52.2 237 52.1 236.9 52C236.1 51.3 235.3 50.7 234.6 50C234.4 49.9 234.2 49.7 234 49.6C232.4 48.3 230.7 47.1 229 45.9C228.8 45.8 228.6 45.6 228.4 45.5C227.6 44.9 226.7 44.4 225.8 43.8C225.7 43.7 225.6 43.7 225.4 43.6C224.6 43.1 223.8 42.6 223 42.2C222.8 42.1 222.6 42 222.4 41.9C221.5 41.4 220.6 40.9 219.7 40.4C219.5 40.3 219.3 40.2 219.2 40.1C218.4 39.7 217.5 39.3 216.7 38.9C216.5 38.8 216.4 38.7 216.2 38.7C215.3 38.3 214.3 37.8 213.4 37.4C213.2 37.3 213 37.2 212.7 37.1C211.8 36.7 210.9 36.4 209.9 36C209.8 36 209.7 35.9 209.7 35.9C208.7 35.5 207.7 35.2 206.7 34.8C206.5 34.7 206.2 34.6 206 34.6C205 34.3 204 34 202.9 33.7C202.8 33.7 202.7 33.7 202.6 33.6C201.9 33.4 201.2 33.2 200.6 33C200.9 28.2 200.2 23.2 198.1 18.5C191.3 2.7 173 -4.5 157.3 2.3C150 5.4 131.7 13.9 128.6 30.8C127.3 37.9 137.1 32.7 142.4 36C141.8 36.2 141.1 36.5 140.5 36.7H140.4C104.4 50.8 78.8999 85.2 78.8999 125.4C78.8999 171.9 108.5 207.8 159.8 215.7V227.8C159.8 230.5 161.6 232.8 164.2 233.5L171.7 235.5C174.3 236.2 176.9 236.5 179.5 236.5C182.2 236.5 184.9 236.1 187.5 235.4L194.5 233.5C197.1 232.8 198.8 230.4 198.8 227.8V215.8C242.6 208.3 269 172.2 269 125.3C269.5 113.1 267.3 101 263.2 89.9ZM194.8 216.9V228.2C194.8 228.8 194.4 229.4 193.8 229.6L186.8 231.5C184.6 232.1 182.3 232.4 180 232.4C177.8 232.4 175.5 232.1 173.4 231.5L165.9 229.5C165.3 229.3 164.9 228.8 164.9 228.1V216.6C170.4 217.3 176.2 217.6 182.1 217.6C186.4 217.7 190.7 217.4 194.8 216.9ZM242.7 188.4C227.8 204.6 206.8 213.1 182 213.1C152.1 213.1 127 204.5 109.5 188.1C92.6999 172.5 83.7999 150.9 83.7999 125.7C83.7999 122.4 83.9999 119.1 84.2999 115.9C133.8 98.4 162.6 68.3 166.9 46.1C186.6 60.6 210.1 83 259.1 92C262.9 102.5 265 113.9 265 125.7C265 150.6 257.1 172.8 242.7 188.4Z" fill="black"/>
      <path d="M179.9 234.7C177.5 234.7 175 234.4 172.7 233.7L165.2 231.7C163.6 231.3 162.5 229.8 162.5 228.2V205H197V228.2C197 229.8 195.9 231.3 194.3 231.7L187.3 233.6C184.9 234.4 182.4 234.7 179.9 234.7Z" fill="#FFD0A9"/>

      <path id={`pants-color-${id}`} />
      <path id={`gloves-color-${id}`} />
      <path id={`body-outline-${id}`} />
      <path id={`shoes-outline-${id}`} />
      <path id={`strap-color-${id}`} />
      <path id={`strap-outline-${id}`} />
    </svg>
    <div style={{margin: '2em 0'}}>
      <Button variant="primary" style={{margin: '0 4px'}} onClick={wearClothes}>穿衣服</Button>
      <Button variant="primary" style={{margin: '0 4px'}} onClick={wearPants}>穿褲子</Button>
      <Button variant="primary" style={{margin: '0 4px'}} onClick={wearShoes}>穿鞋子</Button>
      <Button variant="primary" style={{margin: '0 4px'}} onClick={wearBackpack}>揹背包</Button>
      <Button variant="primary" style={{margin: '0 4px'}} onClick={changeHair}>換髮型</Button>
    </div>
    </>
    )
}

export default Character
