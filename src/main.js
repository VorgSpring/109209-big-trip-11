const ITEM_COUNT = 3;

const createInfoLayout = () => (`
    <div class="trip-info__main">
        <h1 class="trip-info__title">
            <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
        </h1>

        <p class="trip-info__dates">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
    </div>
`);

const createPriceLayout = () => (`
    <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
`);


const createMenuLayout = () => (`
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
`);

const createFiltersLayout = () => (`
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
        <div class="trip-filters__filter">
            <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
            <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
        </div>

        <div class="trip-filters__filter">
            <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
            <label class="trip-filters__filter-label" for="filter-future">Future</label>
        </div>

        <div class="trip-filters__filter">
            <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
            <label class="trip-filters__filter-label" for="filter-past">Past</label>
        </div>

        <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
`);

const createSortLayout = () => (`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>  

        <div class="trip-sort__item  trip-sort__item--event">
            <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
            <label class="trip-sort__btn" for="sort-event">Event</label>
        </div>

        <div class="trip-sort__item  trip-sort__item--time">
            <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
            <label class="trip-sort__btn" for="sort-time">
                Time
                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>
            </label>
        </div>

        <div class="trip-sort__item  trip-sort__item--price">
            <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
            <label class="trip-sort__btn" for="sort-price">
                Price
                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>
            </label>
        </div>

        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>
`);

const createAddEventFormLayout = () => (`
    <form class="trip-events__item  event  event--edit" action="#" method="post">
        <header class="event__header">
            <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                    <span class="visually-hidden">Choose event type</span>
                    <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                <div class="event__type-list">
                    <fieldset class="event__type-group">
                        <legend class="visually-hidden">Transfer</legend>

                        <div class="event__type-item">
                            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" checked>
                            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                            <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
                            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>
                    </fieldset>

                    <fieldset class="event__type-group">
                    <legend class="visually-hidden">Activity</legend>

                        <div class="event__type-item">
                            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
                <label class="event__label  event__type-output" for="event-destination-1">
                    Bus to
                </label>
                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
                <datalist id="destination-list-1">
                    <option value="Amsterdam"></option>
                    <option value="Geneva"></option>
                    <option value="Chamonix"></option>
                    <option value="Saint Petersburg"></option>
                </datalist>
            </div>

            <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">
                    From
                </label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
                    &mdash;
                <label class="visually-hidden" for="event-end-time-1">
                    To
                </label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
            </div>

            <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                    &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
    </form>
`);

const createItemTripLayout = () => (`
    <li class="trip-days__item  day">
        <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
        </div>

        <ul class="trip-events__list">
        <li class="trip-events__item">
            <div class="event">
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
            </div>
            <h3 class="event__title">Taxi to Amsterdam</h3>

            <div class="event__schedule">
                <p class="event__time">
                <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
                &mdash;
                <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
                </p>
                <p class="event__duration">30M</p>
            </div>

            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">20</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
                <li class="event__offer">
                <span class="event__offer-title">Order Uber</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">20</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
            </div>
        </li>

        <li class="trip-events__item">
            <div class="event">
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
            </div>
            <h3 class="event__title">Flight to Chamonix</h3>

            <div class="event__schedule">
                <p class="event__time">
                <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>
                &mdash;
                <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>
                </p>
                <p class="event__duration">1H 10M</p>
            </div>

            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">160</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
                <li class="event__offer">
                <span class="event__offer-title">Add luggage</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">50</span>
                </li>
                <li class="event__offer">
                <span class="event__offer-title">Switch to comfort</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">80</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
            </div>
        </li>

        <li class="trip-events__item">
            <div class="event">
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
            </div>
            <h3 class="event__title">Drive to Chamonix</h3>

            <div class="event__schedule">
                <p class="event__time">
                <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>
                &mdash;
                <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>
                </p>
                <p class="event__duration">1H 35M</p>
            </div>

            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">160</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
                <li class="event__offer">
                <span class="event__offer-title">Rent a car</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">200</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
            </div>
        </li>

        <li class="trip-events__item">
            <div class="event">
            <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
            </div>
            <h3 class="event__title">Check-in in Chamonix</h3>

            <div class="event__schedule">
                <p class="event__time">
                <time class="event__start-time" datetime="2019-03-18T12:25">16:20</time>
                &mdash;
                <time class="event__end-time" datetime="2019-03-18T13:35">17:00</time>
                </p>
                <p class="event__duration">40M</p>
            </div>

            <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">600</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
                <li class="event__offer">
                <span class="event__offer-title">Add breakfast</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">50</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
            </button>
            </div>
        </li>
        </ul>
    </li>
`);


const render = (container, template, place = `beforeend`) =>
    container.insertAdjacentHTML(place, template);

const siteInfoElement = document.querySelector(`.trip-info`);
const siteControlsElement = document.querySelector(`.trip-controls`);

render(siteInfoElement, createInfoLayout());
render(siteInfoElement, createPriceLayout());
render(siteControlsElement, createMenuLayout());
render(siteControlsElement, createFiltersLayout());

const siteEventsElement = document.querySelector(`.trip-events`);

render(siteEventsElement, createAddEventFormLayout());

const itemsTripContainerElement = document.createElement(`ul`);

itemsTripContainerElement.classList.add(`trip-days`);

for (let i = 0; i < ITEM_COUNT; i++) {
    render(itemsTripContainerElement, createItemTripLayout());
}

siteEventsElement.append(itemsTripContainerElement);
