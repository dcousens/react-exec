import React from 'react'

export class Exec extends React.PureComponent {
  componentDidMount () {
    if (this.props.onMount) this.props.onMount(this.props)
    if (this.props.onProps) this.props.onProps(null, this.props)
  }

  componentDidUpdate (prevProps) {
    if (this.props.onProps) this.props.onProps(prevProps, this.props)
    if (this.props.onUpdate) this.props.onUpdate(prevProps, this.props)
  }

  render () {
    return null
  }
}
