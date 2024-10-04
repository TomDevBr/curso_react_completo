const Home = () => {
    const [checkbox, setCheckbox] = React.useState(false);
  
    function handleChange({ target }) {
      setCheckbox(target.checked);
    }
  
    return (
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
          />
          Li os termos.
        </label>
      </form>
    );
  };

  export default Home;