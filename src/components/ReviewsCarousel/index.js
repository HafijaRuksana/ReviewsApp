import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickRightArrow = () => {
    const {count} = this.state
    if (count <= 2) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {count} = this.state
    if (count !== 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  render() {
    const {count} = this.state

    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="review-app">
        <div className="content-card">
          <h1 className="heading">Reviews</h1>
          <div className="person-container">
            <div className="top-container">
              <button
                type="button"
                className="left-button"
                onClick={this.onClickLeftArrow}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
              <div className="image-name-container">
                <img src={imgUrl} alt={username} className="image" />
                <p className="name">{username}</p>
              </div>
              <button
                type="button"
                className="right-button"
                onClick={this.onClickRightArrow}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
          <div className="person-review-container">
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
