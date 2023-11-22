const useAlreadySignedIn = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return { isLoggedIn, handleLogout };
};

export default useAlreadySignedIn;
