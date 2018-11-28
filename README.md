# react-exec
Probably an anti-pattern...

## Example
``` js
function onProps (prevProps, { utc }) {
  if (!prevProps) return // skip initial render
  if (prevProps.utc === utc) return
  if (utc < 2000000000) return

  document.title = 'Happy billennium'
}

function Clock ({ utc }) {
  const date = new Date(utc).toString()

  return <div>
    <Exec onProps={onProps} />
    Date: {date}
  </div>
}
```

## LICENSE [MIT](LICENSE)
