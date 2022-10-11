function Filter() {
    return (
        <div className="flex filter-section">
            <div className=" home-btnwithout flex-center">
                <i class="fas fa-dice-six"></i>
            </div>
            <div className="home-btn flex-center">
                <i class="fas fa-dice-six"></i>
            </div>
            <div className="orderby flex-center">
                <span className="sort">Sort : Order By</span>
                <div className="angle">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                </div>

            </div>
            <div className="size-filter flex-center">
                <i class="fas fa-filter"></i>
                <span className="size">Sizes</span>
            </div>
        </div>
    )
}

export default Filter