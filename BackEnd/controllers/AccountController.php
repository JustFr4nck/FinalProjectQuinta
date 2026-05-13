<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require_once __DIR__ . '/../methods/MovimentiMethods.php';

class AccountController
{
  private $mysqli;
  
  public function __construct(){
    $this->mysqli =  new MovimentiMethods();
  }

  public function index(Request $request, Response $response, $args){

    $this->mysqli->getConnection();

    $id = $args['idAccount'];
    $stmt = $this->mysqli->getConnection()->prepare("SELECT * FROM accounts WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $results = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    if($results->num_rows === 0){

      $response->getBody()->write(json_encode("ERRORE: nessun account trovato"));
      return $response->withHeader("Content-type", "application/json")->withStatus(404);

    }

    $response->getBody()->write(json_encode($results));
    return $response->withHeader("Content-type", "application/json")->withStatus(200);
  }

  public function updateNik(Request $request, Response $response, $args){

    $this->mysqli->getConnection();
    $idAccount = $args["idAccount"];

    $body = json_decode($request->getBody(), true);
    $newName = $body["newName"] ?? null;

    if(!$newName){
      $response->getBody()->write(json_encode(["ERRORE:"=> "nome da aggiornare mancante alla richiesta"]));
      return $response->withHeader("Content-type, ", "application/json")->withStatus(400);
    }

    $stmt = $this->mysqli->getConnection()->prepare("UPDATE accounts SET owner_name = ? WHERE id = ?");
    $stmt->bind_param("si", $newName, $idAccount);

    if ($stmt->execute()) {
        $response->getBody()->write(json_encode(["message:" => "Nome aggiornato"]));
        return $response->withHeader("Content-type", "application/json")->withStatus(201);
    } else {

        $response->getBody()->write(json_encode(["ERRORE:" => "Errore durante l'operazione"]));
        return $response->withStatus(502);
    }
    
  }

   public function updateImg(Request $request, Response $response, $args){

    $this->mysqli->getConnection();
    $idAccount = $args["idAccount"];

    $body = json_decode($request->getBody(), true);
    $newImage = $body["newImage"] ?? null;

    if(!$newImage){
      $response->getBody()->write(json_encode(["ERRORE:"=> "immagine da aggiornare mancante alla richiesta"]));
      return $response->withHeader("Content-type, ", "application/json")->withStatus(400);
    }

    $stmt = $this->mysqli->getConnection()->prepare("UPDATE accounts SET profile_image = ? WHERE id = ?");
    $stmt->bind_param("si", $newImage, $idAccount);

    if ($stmt->execute()) {
        $response->getBody()->write(json_encode(["message:" => "Immagine aggiornata"]));
        return $response->withHeader("Content-type", "application/json")->withStatus(201);
    } else {

        $response->getBody()->write(json_encode(["ERRORE:" => "Errore durante l'operazione"]));
        return $response->withStatus(502);
    }
    
  }
}

?>