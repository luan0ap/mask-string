A simple library to apply masks to strings

# Instalation

Clone this this script to your own project, and call the `MaskString` function

## Mask tokens available

#	Numeric

- **\#** Numeric
- **S**	Letter, a to z, case insensitive
- **N**	Alphanumeric, case insensitive for letters
- **\*** Any character



# Usage

```
import MaskString from 'mask-string'

MaskString('123456789', '##.##-##')
// 12.34-56

MaskString('AbcD', 'SS.SS')
// Ab.cD

MaskString('Abc123', 'NN.NN-NN')
// Ab.c1-23

MaskString('==||==', '**.**-**')
// ==.||-==

MaskString('123abc=', '##.SS-SS')
// 12.ab-c

```
