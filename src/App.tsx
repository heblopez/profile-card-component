import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <>
      <div
        className="
          absolute top-[-75vh] left-[-200vw]
          xl-mobile:left-[-185vw]
          sm-tablet:left-[-125vw]
          md-tablet:left-[-75vw]
          lg-tablet:left-[-50vw]
          desktop:left-[-25vw]
          desktop:top-[-90vh]
          xl-desktop:left-[-15vw]
          xl-desktop:top-[-50vh]
          w-[978px] h-[978px]
          bg-[url('./assets/bg-pattern-top.svg')]
          bg-no-repeat z-0
        "
      ></div>
      <ProfileCard />
      <div
        className="
          absolute bottom-[-75vh] right-[-200vw]
          xl-mobile:right-[-185vw]
          sm-tablet:right-[-125vw]
          md-tablet:right-[-75vw]
          lg-tablet:right-[-50vw]
          desktop:right-[-25vw]
          desktop:bottom-[-90vh]
          xl-desktop:right-[-15vw]
          xl-desktop:bottom-[-50vh]
          w-[978px] h-[978px]
          bg-[url('./assets/bg-pattern-bottom.svg')]
          bg-no-repeat z-0
        "
      ></div>
    </>
  )
}

export default App
