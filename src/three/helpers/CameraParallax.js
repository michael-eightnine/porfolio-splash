import { useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useThree, useFrame } from "@react-three/fiber";

/**
 * Utility component that adds a parallax effect, where canvas content slowly floats away from the current mouse position,
 * to a canvas scene. This functionality is paused when a connection overlay is open unless the `allowMouseMove` prop is true
 *
 * @property {string} props.canvasSelector - selector value for querySelector-ing the canvas container
 * @property {number} props.mouseMoveFactor - factor to use for calculating mouseMove amount
 *                                         Higher = more movement, defaults to 0.01
 *
 * @returns {null}
 */
const CameraParallax = ({ canvasSelector, mouseMoveFactor }) => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const camera = useThree((three) => three.camera);
  const canvasContainer = document.querySelector(canvasSelector);
  const boundingRect = useMemo(
    () => canvasContainer.getBoundingClientRect(),
    [canvasContainer]
  );

  const containerHalfX = boundingRect.width / 2,
    containerHalfY = boundingRect.height / 2;

  // Bind and unbind our listener on mount and unmount respectively
  useEffect(() => {
    // This controls the degree to which we're panning the camara
    const onDocumentMouseMove = (event) => {
      mouseX.current = (event.clientX - containerHalfX) * mouseMoveFactor;
      mouseY.current = (event.clientY - containerHalfY) * mouseMoveFactor;
    };

    if (canvasContainer) {
      canvasContainer.addEventListener("mousemove", onDocumentMouseMove);
    }
    return () => {
      canvasContainer.removeEventListener("mousemove", onDocumentMouseMove);
    };
  }, [canvasContainer, containerHalfX, containerHalfY, mouseMoveFactor]);

  // This controls the speed at which the camera pans
  useFrame(() => {
    camera.position.x += (mouseX.current - camera.position.x) * 0.0075;
    camera.position.y += (-mouseY.current - camera.position.y) * 0.0075;
  });
  return null;
};

CameraParallax.defaultProps = {
  mouseMoveFactor: 0.01,
};

CameraParallax.propTypes = {
  canvasSelector: PropTypes.string.isRequired,
  mouseMoveFactor: PropTypes.number,
};

export default CameraParallax;
