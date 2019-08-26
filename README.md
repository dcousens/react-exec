### react-exec
# DEPRECATED: use `useEffect` instead

#### Example
``` js
function onProps (prevProps, { utc }) {
  if (!prevProps) return // skip initial render, never true for onUpdate
  if (prevProps.utc === utc) return
  if (utc < 2000000000) return

  document.title = 'Happy billennium'
}

function onMount () {
  console.log('Mounted!')
}

function Clock ({ utc }) {
  const date = new Date(utc).toString()

  return <div>
    <Exec onMount={onMount} />
    <Exec onProps={onProps} utc={utc} />
    <Exec onUpdate={onProps} utc={utc} />
    Date: {date}
  </div>
}
```

#### LICENSE [MIT](LICENSE)
