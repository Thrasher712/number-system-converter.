# Number System Converter

## Overview
This is a mobile app project for SPC 2207 CAT ONE.  
It converts numbers between different number systems (binary, decimal, octal, hexadecimal, etc.).  

## Group Members & Roles
- Njomo Richu Brian CT100/G/21746/24 – Project Manager,   
- Isaac Julius Wainaina CT100/G/22432/24 – UI/UX Designer  
- Simon Maina CT100/G/22403/24 – Frontend Developer  
- Frankline Kimathi CT100/G/22026/24 – Algorithm/Logic Developer
- Albert Muema Mutio - QA & Documentation   
 

(Lecturer has been added as a GitHub collaborator.)

## Features
- Convert between bases 2–36  
- Supports integers and fractional parts  
- Handles negative numbers  
- Shows error if input is invalid  

## Example Conversions
1. Decimal **156** → Binary = **10011100**  
   (Step by step: divide 156 by 2 repeatedly → remainders read bottom-up.)  

2. Binary **1011.101** → Decimal = **11.625**  
   (Step by step:  
   - Integer 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8+0+2+1 = 11  
   - Fraction .101 = 1×½ + 0×¼ + 1×⅛ = 0.5+0+0.125 = 0.625  
   - Total = 11.625)  

3. Hexadecimal **1A3** → Decimal = **419**  
   (Step by step: 1×16² + 10×16¹ + 3×16⁰ = 256 + 160 + 3 = 419)

## How to Run (later)
- Clone repo  
- Run `npm install`  
- Run tests: `npm test`

## Documentation
- **Process documentation**: [to be added] (meeting logs, roles, project plan)  
- **Program documentation**: [to be added] (detailed algorithm, test cases)  
