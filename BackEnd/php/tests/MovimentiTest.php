<?php declare(strict_types = 1);

use PHPUnit\Framework\TestCase;

final class MovimentiTest extends TestCase{

    public function testIndexReturns404WhenNoTransactionsFound() {
        // Mock del DB
        $mysqliMock = $this->createMock(mysqli::class);
        $stmtMock = $this->createMock(mysqli_stmt::class);
        $resultMock = $this->createMock(mysqli_result::class);

        //il database restituisce 0 righe
        $resultMock->num_rows = 0; 
        $stmtMock->method('get_result')->willReturn($resultMock);
        $mysqliMock->method('prepare')->willReturn($stmtMock);

        // Mock della Request e Response 
        $request = (new RequestFactory())->createRequest('GET', '/accounts/1/transactions');
        $response = (new ResponseFactory())->createResponse();
        $args = ['idAccount' => 1];

        // Run del Controller
        $controller = new TransactionController($mysqliMock);
        $resultResponse = $controller->index($request, $response, $args);

        $this->assertEquals(404, $resultResponse->getStatusCode());
        
        $body = (string)$resultResponse->getBody();
        $this->assertStringContainsString("ERRORE: nessun movimento trovato", $body);
    }
}





?>