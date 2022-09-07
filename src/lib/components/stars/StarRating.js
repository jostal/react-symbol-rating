import './StarRating.css'

export default function StarRating({ rating, stars, icon }) {


  const renderStar = (percentFilled) => {
    if (percentFilled < 100 && percentFilled > 0) {
      document.documentElement.style.setProperty('--percentFilled', `${percentFilled}%`);
    }
    return (
        <span className={percentFilled < 100 && percentFilled > 0 ? 'star-percent' : percentFilled === 0 ? 'star-empty' : 'star-filled'}>
          { icon }
        </span>
    )
  }

  const renderRating = () => {
    let renderedStars = []
    console.log(rating%1 * 100)
    for (let i = 0; i < stars; i++) {
      if (i < Math.floor(rating)) {
        renderedStars.push(renderStar(100))
      }
      else if (i > Math.floor(rating)) {
        renderedStars.push(renderStar(0))
      } else {
        renderedStars.push(renderStar((rating%1) * 100))
      }
    }
    return renderedStars
  }

  return (
      <div>
        {renderRating()}
      </div>
  )
}