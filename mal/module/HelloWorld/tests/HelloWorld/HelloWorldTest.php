<?php
/**
 * Unit Test Example
 *
 * @author Sven Anders Robbestad <robbestad@gmail.com>
 */
namespace CI\Tests\HelloWorld;

require_once __DIR__ . '/../../src/HelloWorld/HelloWorld.php';

use CI\HelloWorld\HelloWorld;

/**
 * HelloWorld class test case
 *
 * @author Sven Anders Robbestad <robbestad@gmail.com>
 */
class HelloWorldTest extends \PHPUnit_Framework_TestCase
{
        /**
         * Very simple test verifying the welcome message text
         */
        public function testHelloReturnsWelcomeMessage()
        {
                $helloWorld = new HelloWorld();
                $result = $helloWorld->hello();

                $expectedMessage = "Hello everybody! :)";
                $this->assertEquals($expectedMessage, $result);
        }

}
