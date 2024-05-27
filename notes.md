main.jsx

import { Details } from './pages/Details/' // the index file is default, so naming a folder "details" and then adding "index" to the file, you don't have any issues with the named function used {}, and keeps the code cleaner and readable.

index.jsx

import { Fragment } from 'react' // Fragment -> no visual impact, no layout breaking. It is used to make possible to attribute lots of things as just one element inside the same return. To used it, just type " <> </>". A div could also be used, when it's needed to style a div.
import { Container } from './styles';

export function Details() { //no default, due to the use of the named function Details. On main, you get to see this function mentioned with { Details }, preventing code inconsistency and unwanted bugs.

  return(
  <> 
    <h1>Hello World!</h1>
    <span>Rodrigo Gonçalves</span>
  </>
  )
}