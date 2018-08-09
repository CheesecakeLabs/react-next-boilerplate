import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Carrousel extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.text,
        alt: PropTypes.text,
        legend: PropTypes.text,
      })
    ),
  }

  static defaultProps = {
    size: '500px',
    images: [],
  }

  render() {
    const { images, size } = this.props
    return (
      <Carousel autoPlay width={size}>
        {images.map(({ url, alt, legend }) => (
          <div>
            <img src={url} alt={alt} />
            <p className="legend">{legend}</p>
          </div>
        ))}
      </Carousel>
    )
  }
}
export default Carrousel
