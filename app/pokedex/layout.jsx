const PokedexLayout = ({ children }) => {
  return (
    <div className="flex gap-6">
      {children}

      <div className="w-full max-w-sm bg-gray-100 border">
        ASIDE POKEMON
      </div>
    </div>
  )
}

export default PokedexLayout;