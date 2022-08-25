const ParentComponent = () => {
    const handleClick = () => {
      /**
        * Le bouton a été cliqué
        * Déclencher la soumission du formulaire
        * en envoyant les données des champs de texte.
        */
    };
    return (
      <Button
        label="Click me!"
        backgroundColor="#ff4757"
        isRounded={true}
        handleClick={handleClick}
      />
    );
  }