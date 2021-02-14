const useStateRef = (initialData) => {
    const [state, _setState] = useState(initialData);
    const stateRef = useRef(state);
  
    const setState = (data) => {
      stateRef.current = data;
      _setState(data);
    };
  
    return [stateRef, setState];
  };