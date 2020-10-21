import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-component"
      data-ride="carousel"
      data-interval="7000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h4>What Is a Pathfinding Algorithm?</h4>
          <p>
            At its core, a pathfinding algorithm seeks to find the shortest path
            between two points in a "graph". A graph in this sense can be
            thought of as a series of vertices (or nodes) that are connected
            through edges (or links). The algorithms in this application are
            adapted for a 2D grid, whereby each square within the grid
            represents a node, and each node is connected to its neighbours
            through one of its four sides. Therefore, a node can be traversed by
            moving left, right, up or down - but not diagonally. The "cost" of
            traveling from one node to another is 1, the cost of traveling
            through a maze wall is Infinity.
          </p>
          <img
            class="d-block"
            width="350px"
            src="images/tutorialImages/pathfinding.png"
            alt="maze theory"
          />
        </div>
        <div class="carousel-item">
          <h4>The Algorithms</h4>
          <br />
          <h5>Dijkstra</h5>
          <p>
            The grandfather of pathfinding algorithms; it uses the cost or
            “distance” between nodes to determine the shortest path between the
            starting point and all other nodes in the graph. It is therefore
            able to guarantee the shortest path from start node to finish.
          </p>
          <h5>A* Euclidean</h5>
          <p>
            An extension of Dijkstra's algorithm that introduces a "heuristic"
            (a technique for solving a problem more quickly by using an
            approximate solution). The A* algorithm also uses the lowest-cost
            path to determine the optimal route, but also factors in the
            distance from the current node to the finish node. In this case, it
            uses the Euclidean distance (as the crow flies).
          </p>
          <h5>A* Manhattan</h5>
          <p>
            A variant of the A* algorithm that uses a Manhattan heuristic. In
            this case, the distance from current node to finish node is taken as
            the sum of the vertical and horizontal distances from within the
            grid (much like how a taxi cab in manhattan calculates distances
            between city blocks).
          </p>
          <h5>Breadth First Search</h5>
          <p>
            Traverses the graph in a breadthward motion whereby it first
            explores its neighbouring nodes (nodes which are directly connected
            to the source node), and then moves continuously outward to explore
            the next level of neighbouring nodes.
          </p>
          <h5>Depth First Search</h5>
          <p>
            Traverses a graph in a depthward motion whereby it explores an
            individual path as far as possible before backtracking and exploring
            a new path. It repeats this until it finds a path that leads to the
            finish node.
          </p>
        </div>
        <div class="carousel-item">
          <h4>Drawing a Maze</h4>
          <p>
            To draw a maze wall, simply click and drag your cursor across the
            grid. Click on an existing wall node to remove it.
          </p>
          <img
            class="d-block"
            width="500px"
            src="images/tutorialImages/drawingMaze.gif"
            alt="drawing a maze"
          />
        </div>

        <div class="carousel-item">
          <h4>Generating a Maze</h4>
          <p>
            You can also generate a random complex maze by clicking on the
            Generate Maze button. These mazes are generated through the use of a
            Recursive Division algorithm with a vertical skew.
          </p>
          <img
            class="d-block"
            width="600px"
            src="images/tutorialImages/automaticMaze.gif"
            alt="generating a maze"
          />
        </div>
        <div class="carousel-item">
          <h4>Selecting an Algorithm</h4>
          <p>
            Click the Run Algorithm button to visualise how the pathfinding
            algorithm searches through the maze to find the finishing node.
            Dijkstra's algorithm is selected by default, but can be changed by
            selecting an algorithm from the dropdown menu.
          </p>
          <img
            class="d-block"
            width="500px"
            src="images/tutorialImages/selectAlgo.png"
            alt="selecting algorithm"
          />
        </div>
        <div class="carousel-item">
          <h4>Changing the Start and Finish Nodes</h4>
          <p>
            Drag and drop the start and finishing nodes to different locations
            in order to change where the algorithm starts searching from and for
            which point it is searching for.
          </p>
          <img
            class="d-block"
            width="500px"
            src="images/tutorialImages/drag.gif"
            alt="drag and drop start and finish nodes"
          />
        </div>
        <div class="carousel-item">
          <h4>Clearing the Path and the Screen</h4>
          <p>
            You can clear the "Path" and "Visited" nodes that are generated
            after an algorithm is run by clicking the Clear Path button. In
            addition, you can also clear the "Wall" nodes by clicking the Clear
            Screen button.
          </p>
          <img
            class="d-block"
            width="500px"
            src="images/tutorialImages/clear.gif"
            alt="clearing path and screen"
          />
        </div>
        <div class="carousel-item">
          <h4>An Unsolvable Maze</h4>
          <p>
            In the case that a maze is unsolvable, an error message will appear
            on the page. You can rectify this by modifying the existing maze
            (either by removing wall nodes or relocating the start and finish
            nodes), or by clearing the screen and creating a new maze from
            scratch.
          </p>
          <img
            class="d-block"
            width="500px"
            src="images/tutorialImages/unsolvable.gif"
            alt="unsolvable maze"
          />
        </div>
        <div class="carousel-item">
          <h4>Enjoy!</h4>
          <br />
          <h5>
            I hope you have as much fun playing around with this visualization
            tool as I had building it.
          </h5>
          <p>
            If you want to see the source code for this project or check out
            some of the other projects I've worked on, feel free to take a look
            at my{" "}
            <a
              style={{ color: "rgb(44, 89, 236)" }}
              href="https://github.com/ad13380"
            >
              Github
            </a>
            .
          </p>
        </div>
      </div>
      <a
        class="carousel-control-prev dark"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
