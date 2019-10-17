import React from 'react';
import { shallow, mount }from 'enzyme';
import AllMovies from '../AllMovies';
import MovieDetail from '../MovieDetail';
describe('AllMovies', () => {
  let wrapper: any;
  let mockOnchange: any;
  const movie = {
    Title: "Jumbo",
    Year: "2000",
    Rated: "string",
    Released: "string",
    Runtime: "string",
    Genre: "string",
    Director: "string",
    Writer: "string",
    Actors: "string",
    Plot: "string",
    Language: "string",
    Country: "string",
    Awards: "string",
    Poster: "string",
    Ratings: [],
    Metascore: "string",
    imdbRating: "string",
    imdbVotes: "string",
    imdbID: "string",
    Type: "string",
    DVD: "string",
    BoxOffice: "string",
    Production: "string",
    Website: "string",
    Response: "string"
  }

  beforeEach(() => {
    mockOnchange = jest.fn();
    wrapper = shallow(<AllMovies onChange={mockOnchange} />);
  });
  it("The component 'AllMovies' should render correctly", () => {
    const component = shallow(<AllMovies />);
  
    expect(component).toMatchSnapshot();
  });
  it("The component 'MovieDetail' should render correctly", () => {
    const component = shallow(<MovieDetail movieData={movie} />);
  
    expect(component).toMatchSnapshot();
  });
  it("should call handleOnChange", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleOnChange");
      
      wrapper.instance().forceUpdate();
      const mockEvent = {
        target: {
          name: "movie title",
          value: "jumbo"
        }
      };
      const expected = true;
      wrapper.instance().handleOnChange(mockEvent);
      expect(spy).toHaveBeenCalled();
    });
  it("check counter increment function is callled", () => {
      const wrapper:any = mount(<AllMovies />);
      const spy = jest.spyOn(wrapper.instance(), "getMovies");
      wrapper.setState({})
      wrapper.find("button").simulate("click");
      expect(spy).toHaveBeenCalled();
    });
  });